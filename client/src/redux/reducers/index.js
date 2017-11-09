import  { words } from './words';
import { isShowForm } from './isShowForm';
const state = {
  words: [],
  isShowForm: true
}

const reducer = function(prevState = state, action) {
  return {
    words: words(prevState.words, action),
    isShowForm: isShowForm(prevState.isShowForm, action)
  }
}

export default reducer;
