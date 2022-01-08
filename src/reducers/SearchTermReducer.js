const SearchTermReducer = (state = '', action) => {
    switch (action.type) {
        case 'FETCH_SEARCHTERM':
            return action.payload;
        default:
            return state;
    }
}

export default SearchTermReducer;