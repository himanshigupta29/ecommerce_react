
import { FETCH_PRODUCTS_REQUEST, 
        FETCH_PRODUCTS_SUCCESS,
        FETCH_PRODUCTS_ERROR,
        INCREMENT_PAGE,
        EMPTY_PRODUCTS_LIST,
        SET_HAS_MORE_PRODUCTS } from './productTypes';

const initialState = {
    loading: false,
    error: false,
    products: [],
    hasMore: true,
    page: 0
}

function ProductReducer(state = initialState, action) {
   
    console.log('fired action ', action.type);

    switch(action.type) {

        case EMPTY_PRODUCTS_LIST:
            return {
                ...state,
                products: []
            };

        case FETCH_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true,
                error: false
            };

        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                error:false,
                products: [...state.products, ...action.payload]
            };

        case FETCH_PRODUCTS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case INCREMENT_PAGE:
            return {
                ...state,
                page: state.page+1
            }

        case SET_HAS_MORE_PRODUCTS:
                return {
                    ...state,
                    hasMore: action.payload
                }

        default:
            return state;

    }
}

export default ProductReducer
