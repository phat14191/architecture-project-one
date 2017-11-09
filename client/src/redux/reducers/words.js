export function words (prevWords = [], action) {

  let newWords = [...prevWords]

  switch(action.type) {
    case 'ADD_WORD':
      newWords.push(action.word);
      return newWords;
    case 'DELETE_WORD':
      newWords.splice(action.index, 1);
      return newWords;
    default:
      return prevWords;
  }
}
