import React from 'react';
import ListWordsComponent from './ListWordsComponent';
import Word from './Word';

import  { connect } from 'react-redux';

class ListWordsContainer extends React.Component {
  constructor() {
    super();
    this.genList = this.genList.bind(this);
  }

  genList() {
    return this.props.words.map((word, index) => {
      return <Word
              key={word.txtVn + index}
              word={word}
              index={index}
             />
    })
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

export default connect(mapStatetoProps, {})(ListWordsContainer);
