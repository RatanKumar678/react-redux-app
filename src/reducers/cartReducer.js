const CartReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_CART':
            return [...state, action.payload];
        default:
            return state;
    }
}

export default CartReducer;