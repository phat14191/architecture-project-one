import React from 'react';
import WordFormComponent from './WordFormComponent';

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
    this.props.addWord(this.state.words)
    this.setState({
      words: {
        txtEn: '',
        txtVn: ''
      },
      isShowForm: false
    });
  }

  render() {
    // console.log(this.state.words);
    return (
      <div>
        <WordFormComponent
          handleChange={this.handleChange}
          words={this.state.words}
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}

export default connect(null, words)(WordFormContainer);
