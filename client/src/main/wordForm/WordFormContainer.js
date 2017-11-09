import React from 'react';
import WordFormComponent from './WordFormComponent';
import axios from 'axios';

import { connect } from 'react-redux';
import { words } from '../../redux/actions';


class WordFormContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      words: {
        txtEn: '',
        txtVn: ''
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleChange(event) {
    event.persist();
    this.setState((prevState) => {
      return {
        words: {
          ...prevState.words,
          [event.target.name]: event.target.value
        }
      }
    })
  }


  handleSubmit(event) {
    event.preventDefault();
    // alert(JSON.stringify(this.state.words));
    const word = {en: this.state.words.txtEn, vn: this.state.words.txtVn, isMemorized: false}
    axios.post('http://localhost:8282/vocabulary', word)
      .then((res) => {
        this.props.addWord(res.data)
        this.setState({
          words: {
            txtEn: '',
            txtVn: ''
          }
        });
        this.props.toggleIsShowForm()
      })
      .catch(err => console.log(err))
    
  }

  handleCancel() {
    this.props.toggleIsShowForm()
  }

  render() {
    // console.log(this.state.words);
    return (
      <div>
        <WordFormComponent
          handleChange={this.handleChange}
          words={this.state.words}
          handleSubmit={this.handleSubmit}
          isShowForm={this.props.isShowForm}
          handleCancel={this.handleCancel}
        />
      </div>
    )
  }
}

const mapState = (state) => ({
  isShowForm: state.isShowForm
})

export default connect(mapState, words)(WordFormContainer);
