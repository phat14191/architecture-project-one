import React from 'react';

function ListWordsComponent(props) {
  const containerStyles = {
        textAlign: "center",
        justifyContent: "space-around",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap"
    };
  return (
    <div style={containerStyles}>
      {props.genList()}
    </div>
  )
}

export default ListWordsComponent;
