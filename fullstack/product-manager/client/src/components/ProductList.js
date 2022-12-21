import React from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
    
const ProductList = (props) => {
    const { removeFromDom } = props;
    
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.error(err));
    }
    // console.log(props.product);
    return (
        <div>
            <h1>All Products:</h1>
            {props.product.map((product, idx) => {
                return <p style={{display:'flex', justifyContent:'space-between',
                 width:'120px', margin:'0 auto', marginBottom:'10px'}} key={idx}>
                    <Link to={"/" + product._id}>
                        {product.title}
                    </Link>
                    
                    <button onClick={(e)=>{deleteProduct(product._id)}}>
                        Delete
                    </button>
                    
                </p>
            })}
        </div>
    )
}
    
export default ProductList;