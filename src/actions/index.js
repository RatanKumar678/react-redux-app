import jsonPlaceholder  from '../apis/jsonPlaceholder';

export const fetchProducts= () => async dispatch => {
    const response = await jsonPlaceholder.get('/products');

    dispatch({
        type: 'FETCH_PRODUCT',
        payload: response.data,
    });
};

export const fetchCartData = product  => {
    return {
        type: 'FETCH_CART',
        payload: product
    };
};

export const fetchSelectedProduct = product  => {
    return {
        type: 'FETCH_SELECTEDPRODUCT',
        payload: product
    };
};

export const fetchSearchTerm = term  => {
    return {
        type: 'FETCH_SEARCHTERM',
        payload: term
    };
};