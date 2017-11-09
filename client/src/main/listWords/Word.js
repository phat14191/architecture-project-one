import React from 'react';
import { connect } from 'react-redux';
import { words } from '../../redux/actions/';

function Word(props) {
  // console.log(props)
  const style = {
    height: "140px",
    border: "2px solid #444444",
    margin: "0 20px 20px",
    padding: "10px",
    paddingTop: "10px",
    width: "120px",
    display: "flex",
    justifyContent: "flexStart",
    flexWrap: "wrap"
  }
  const color = props.word.isMemorized ? 'green' : 'red';
  return (
    <div style={style}>
      <p style={{color}}>Enlish: {props.word.txtEn}</p>
      <p>Vietnamese: {props.word.txtVn}</p>
      <button onClick={() => {props.deleteWord(props.index)}}>Romove</button>
      <button>Toggle</button>
    </div>
  )
}

export default connect(null, words)(Word);
