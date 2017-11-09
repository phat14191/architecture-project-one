import React from 'react';
import { connect } from 'react-redux';
import { words } from '../../redux/actions/';

function Word(props) {
  // console.log(props)
  const cardStyles = {
    backgroundColor: "rgba(223, 123, 129, .5)",
    width: "23%",
    minWidth: "180px",
    borderRadius: "20px",
    flexBasis: "auto",
    marginTop: "15px",
    marginBottom: "15px",
    fontSize: "1em",
    textAlign: "left",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
    transition: "0.3s",
    padding: "2px 16px 4px"
  };

  const button = {
    background: "red",
    borderRadius: "8px",
    color: "white"
  }

  const font = {
    fontWeight: 600	
  }

  const color = props.word.isMemorized ? 'green' : 'red';
  return (
    <div style={cardStyles}>
      <p style={{ color, fontWeight: "600", fontFamily: "Chalkduster, fantasy"}}>English: {props.word.en}</p>
      <p style={{ fontFamily: "Marker Felt, fantasy"}}>Vietnamese: {props.word.vn}</p>
      <button style={button} onClick={() => {props.deleteWord(props.word._id, props.index)}}>Remove</button>
      <button onClick={() => props.toggleWord(props.word._id, props.word, props.index)} style={button} >{props.word.isMemorized ? 'Memorized' : 'Learning'}</button>
    </div>
  )
}

export default Word;
