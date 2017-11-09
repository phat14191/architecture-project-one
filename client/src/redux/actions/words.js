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

export function toggleWord(index) {
  return {
    type: 'TOGGLE_IS_MEMORIZED',
    index
  }
}

export function setWords(words) {
  return {
    type: 'SET_WORDS',
    words
  }
}

export function toggleIsShowForm() {
  return {
    type: 'TOGGLE_IS_SHOW_FORM'
  }
}