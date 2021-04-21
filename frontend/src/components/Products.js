import React, {useEffect, useRef, useCallback} from 'react'
import { connect } from 'react-redux';
import ProductItem from './ProductItem';
import { fetchProducts,
     incrementPage} from '../redux';



function Products({productsData,
    fetch_products,
     inc_page }) {


    useEffect( () => {
        console.log('componet mounted.. call api . products');
        fetch_products(productsData.page);
        
    }, [productsData.page]);
    


    const observer = useRef();
    const lastProductElement = useCallback(node => {

        if(productsData.loading) return;

        if (observer.current) observer.current.disconnect()

        observer.current = new IntersectionObserver( entries => {
            if(entries[0].isIntersecting && productsData.hasMore) {
                inc_page();
            }
        });

        if (node) observer.current.observe(node)

    }, [productsData.loading]);


    if(!productsData.products) {
        return <h3>No items found</h3>;
    }



    return (
        <div>

             <div className="row">

            {
                productsData.products.map( (product, index) => {

                    if(productsData.products.length === index+1) {


                        console.log('......productsData.products.length..................',productsData.products.length);
                        console.log('........................', index);
                        console.log('........................');
                        console.log('........................');
                
                        return (
                                <ProductItem ref ={lastProductElement} 
                                key = {product.category_id + product.sub_category_id + product.id}
                                product = {product} />
                            
                        )

                    } else {

                        return (
                                 <ProductItem 
                                 key = {product.category_id + product.sub_category_id + product.id}
                                 product = {product} />
                        )

                    }
                
                })
            }
        </div>
            
            
            <div>  {productsData.loading && 'loading please wit....'} </div>
              
            <div>  {productsData.error && 'error occurred, please try again please wit....'} </div>
            
        </div>
    );

}



function mapStateToProps(state) {

    return {
        productsData: state.products,
    };

}

function mapDispatchToProps(dispatch) {

    return {
        fetch_products: (page) => { dispatch(fetchProducts(page)) },
        inc_page: () => { dispatch(incrementPage()) },
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Products)
