import React from 'react';
import WordFormContainer from "./wordForm/WordFormContainer";
import ListWordsContainer from "./listWords/ListWordsContainer";
import backGroundUrl from './Vocabulary.png';

function App() {
  const containerStyle = {
        background: `url(${backGroundUrl}) no-repeat center center`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        minHeight: "1000px",
        width: "100%"
    };
  return (
    <div style={containerStyle} className="container">
      <WordFormContainer />
      <ListWordsContainer />
    </div>
  )
}

export default App;
