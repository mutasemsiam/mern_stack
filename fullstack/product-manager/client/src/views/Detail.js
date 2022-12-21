import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
    
const Detail = (props) => {
    const [product, setProduct] = useState({})
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' +props.something)
            .then(res => {setProduct(res.data); console.log(res.data)})
            .catch(err => {console.error(err); console.log("errrrorr")});
    }, []);

    const doNavigate = () =>{
        const x = product._id;
        navigate(`/${x}/edit`);
    }
    
    return (
        <div>
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.desc}</p>
            <input onClick={doNavigate} type="button" value="Edit"/>
        </div>
    )
}
    
export default Detail;