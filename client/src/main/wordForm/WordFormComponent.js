import React from 'react';

function WordFormComponent(props) {
  const center = {
    backgroundColor: "#F0FFF0",
    margin: "auto",
    width: "20%",
    border: "3px solid green",
    padding: "10px",
    borderRadius: "5px"
  }
  const button = {
    backgroundColor: "#F5F5DC",
    color: "black",
    border: "2px solid #DC143C",
    marginBottom: "5px"
  }

  const styleForm = props.isShowForm ? {} : {display: "none"};

  return (
    <div style={center} >
      <form onSubmit={props.handleSubmit} style={ styleForm }>
        <input
          onChange={props.handleChange}
          name="txtEn"
          value={props.words.txtEn}
          type="text"
          placeholder="  English"

        />
       <br/><br/>

        <input
          onChange={props.handleChange}
          name="txtVn"
          value={props.words.txtVn}
          type="text"
          placeholder="  Vietnamese"
        />
        <br/><br/>

        <button style={button} type="submit" className="btn">Add new word</button>
      </form>
        <button onClick={props.handleCancel} style={button} className="btn">{ props.isShowForm ? 'Cancel' : 'Show' }</button>
    </div>
  )
}

export default WordFormComponent;
