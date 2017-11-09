import React from 'react';

function ListWordsComponent(props) {
  return (
    <div>
      {props.genList()}
    </div>
  )
}

export default ListWordsComponent;
