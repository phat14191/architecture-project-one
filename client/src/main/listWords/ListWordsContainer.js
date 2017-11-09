import React from 'react';
import ListWordsComponent from './ListWordsComponent';
import Word from './Word';
import { words } from '../../redux/actions';
import axios from 'axios';

import  { connect } from 'react-redux';

class ListWordsContainer extends React.Component {
  constructor() {
    super();
    this.genList = this.genList.bind(this);
    this.toggleWord = this.toggleWord.bind(this);
    this.deleteWord = this.deleteWord.bind(this);
  }

  genList() {
    return this.props.words.map((word, index) => {
      return <Word
              key={word.vn + index}
              word={word}
              index={index}
              toggleWord={this.toggleWord}
              deleteWord={this.deleteWord}
             />
    })
  }

  componentDidMount() {
    axios.get('http://localhost:8282/vocabulary/')
      .then(res => {
        this.props.setWords(res.data)
        console.log(res.data)
      })
    
      .catch(err => console.log(err));
  }  

  toggleWord(_id, word, index) {
    axios.put('http://localhost:8282/vocabulary/' + _id, { ...word, isMemorized: !word.isMemorized })
      .then(() => this.props.toggleWord(index))
      .catch(err => console.log(err));
  }

  deleteWord(_id, index) {
    axios.delete('http://localhost:8282/vocabulary/' + _id)
      .then(() => {
        this.props.deleteWord(index);
      })
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.props);
    return (
      <ListWordsComponent
        genList={this.genList}
      />
    )
  }
}

const mapStatetoProps = (state) => {
  return {
    words: state.words
  }
}

export default connect(mapStatetoProps, words)(ListWordsContainer);
