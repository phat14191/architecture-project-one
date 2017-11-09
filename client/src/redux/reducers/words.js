export function words (prevWords = [], action) {

  let newWords = [...prevWords]

  switch(action.type) {
    case 'SET_WORDS':
      return action.words
    case 'ADD_WORD':
      newWords.unshift(action.word);
      return newWords;
    case 'DELETE_WORD':
      newWords.splice(action.index, 1);
      return newWords;
    case 'TOGGLE_IS_MEMORIZED':
      const word = { ...newWords[action.index] };
      word.isMemorized = !word.isMemorized;
      newWords[action.index] = word;
      return newWords;
    default:
      return prevWords;
  }
}
