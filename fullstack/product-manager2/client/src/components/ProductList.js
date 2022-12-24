import React, { useEffect, useState } from 'react'
import { Link } from '@reach/router';
import DeleteButton from './DeleteButton';


const ProductList = (props) => {
    const [product, setProduct] = useState([]);

    const removeFromDom = productId => {
        setProduct(product.filter(product => product._id != productId));
    }
    // console.log(props.product);

    useEffect( ()=>{
        setProduct(props.product);
    }, [props.product])
    return (
        <div>
            <h1>All Products:</h1>
            {product.map((product, idx) => {
                return <p style={{
                    display: 'flex', justifyContent: 'space-between',
                    width: '120px', margin: '0 auto', marginBottom: '10px'
                }} key={idx}>
                    <Link to={"/" + product._id}>
                        {product.title}
                    </Link>
                    |
                    <Link to={"/" + product._id + "/edit"}>
                        <button type="submit" >Edit</button>

                    </Link>
                    <DeleteButton productId={product._id} successCallback={()=>removeFromDom(product._id)} />

                </p>
            })}
        </div>
    )
}

export default ProductList;