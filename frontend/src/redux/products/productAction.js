import axios from 'axios';

import { FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_ERROR,
    INCREMENT_PAGE,
    SET_HAS_MORE_PRODUCTS} from './productTypes';

export const fetchProductsRequest = () => {
    
    return {
        type: FETCH_PRODUCTS_REQUEST,
        category: '',
        sub_category: ''
    }
}

export const fetchProductsSuccess = (products) => {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        payload: products
    }
}

export const fetchProductsError = (error) => {
    return {
        type: FETCH_PRODUCTS_ERROR,
        payload: error
    }
}

export const fetchProducts = (page, query) => {

    let productsPage;
    if(page === undefined) {
        productsPage = 0;
    } else {
        productsPage = page;
    }


    return (dispatch) => {

        dispatch( fetchProductsRequest() );
        
        axios.get('http://localhost:3330/products?page=' + productsPage)
            .then( response => {
                const products = response.data;

                if(products.length === 0) {
                    dispatch(setHasMoreProducts(false))
                }

                dispatch( fetchProductsSuccess(products) )
            })
            .catch( (error) => {
                const errmsg = error.message
                dispatch( fetchProductsError(errmsg) )
            });

    }

}



export const incrementPage = () => {
    return {
        type: INCREMENT_PAGE
    }
}

const setHasMoreProducts = (val) => {
    return {
        type: SET_HAS_MORE_PRODUCTS,
        payload: val
    }
}