import React from 'react'


const ProductItem = React.forwardRef((props, ref) => {

    const {product} = props; 

    const imgURL = 'http://localhost:3330/assets/images/categories/' + product.category_id + '/' + product.sub_category_id + '/' + product.id + '/thumb.jpg';

    console.log('imgURL', imgURL);

    const label = (product.label.length > 50) 
    ? (product.label).substring(0,50)  + '...'
    : (product.label);

    return (
       
        <div className="col s12 m3" ref = {ref}>
            <div className="card">
                <div className="card-image">
                    <img src= {imgURL} alt = {product.title} />
                    <span className="card-title">Price ₹{product.price}</span>
                </div>
                <div className="card-content">
                    <p>
                        {label}
                        
                    </p>
                </div>
                <div className="card-action">
                    {/* <a href="#">Product details</a> */}
                </div>
            </div>
        </div>

    )

})


export default ProductItem
