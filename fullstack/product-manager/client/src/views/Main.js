import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const Main = (props) => {
    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);


    useEffect(()=>{
        axios.get('http://localhost:8000/api/product')
            .then(res=>{
                setProduct(res.data.products);
                setLoaded(true);
                console.log("tryy")
            })
            .catch(err => console.error(err));
    },[]);

    const removeFromDom = productId => {
        setProduct(product.filter(product => product._id != productId));
    }

    const addToDom = newProduct => {
      
        setProduct([...product, newProduct]);
        console.log(product);
        console.log("hellooooo");
    }


    return (
        <div >
            <ProductForm addToDom={addToDom} />
            <hr/>
            {loaded && <ProductList product={product} removeFromDom={removeFromDom}/>}
        </div>
    )
}

export default Main;