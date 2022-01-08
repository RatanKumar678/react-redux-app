import { combineReducers } from 'redux';
import ProductsReducer from './productReducer';
import CartReducer from './cartReducer';
import SelectedProductReducer from './selectedProductReducer';
import SearchTermReducer from './SearchTermReducer';

export default combineReducers({
    products: ProductsReducer,
    cartItems: CartReducer,
    selectedItem: SelectedProductReducer,
    searchTerm: SearchTermReducer,
});
