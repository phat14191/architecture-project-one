export function addWord(word) {
  return {
    type: 'ADD_WORD',
    word
  }
}

export function deleteWord(index) {
  return {
    type: 'DELETE_WORD',
    index
  }
}
