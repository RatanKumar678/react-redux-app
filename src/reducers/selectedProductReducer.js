const SelectedProductReducer = (state = null, action) => {
    switch (action.type) {
        case 'FETCH_SELECTEDPRODUCT':
            return action.payload;
        default:
            return state;
    }
}

export default SelectedProductReducer;