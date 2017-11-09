import React from 'react';

function WordFormComponent(props) {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <input
          onChange={props.handleChange}
          name="txtEn"
          value={props.words.txtEn}
          type="text"
          placeholder="English"

        />
       <br/><br/>

        <input
          onChange={props.handleChange}
          name="txtVn"
          value={props.words.txtVn}
          type="text"
          placeholder="Vietnamese"
        />
        <br/><br/>

        <button type="submit" className="btn">Add new word</button>
        <button className="btn">Cancel</button>
      </form>
    </div>
  )
}

export default WordFormComponent;
