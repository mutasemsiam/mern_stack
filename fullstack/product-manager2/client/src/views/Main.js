import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const Main = () => {
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

  

    const addToDom = newProduct => {
        axios.post('http://localhost:8000/api/product', newProduct)
            .then(res=>{setProduct([...product, res.data.product]);console.log("yessss")})
            .catch(err=>{console.log(err); console.log('heyyy')})
      
        
        console.log(product);
        console.log("hellooooo");
    }


    return (
        <div >
            <ProductForm addToDom={addToDom} initialTitle="" initialPrice="" initialDesc="" />
            <hr/>
            {loaded && <ProductList product={product} />}
        </div>
    )
}

export default Main;