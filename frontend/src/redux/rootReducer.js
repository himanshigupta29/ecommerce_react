import { combineReducers } from 'redux'

import ProductReducer from './products/ProductReducer';


const rootReducer = combineReducers({
    products: ProductReducer,
});

export default rootReducer;

