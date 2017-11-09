import  { words } from './words';

const state = {
  words: [],
  isShowForm: false
}

const reducer = function(prevState = state, action) {
  return {
    words: words(prevState.words, action)
  }
}

export default reducer;
