export const isShowForm = (state = true, action) => {
    if (action.type === 'TOGGLE_IS_SHOW_FORM') {
        return !state;
    }
    return state;
}