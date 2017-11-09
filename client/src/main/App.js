import React from 'react';
import WordFormContainer from "./wordForm/WordFormContainer";
import ListWordsContainer from "./listWords/ListWordsContainer";

function App(props) {
  return (
    <div>
      <WordFormContainer />
      <ListWordsContainer />
    </div>
  )
}

export default App;
