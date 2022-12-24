import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
import ProductForm from '../components/ProductForm';


const Update = (props) => {
    // const [title, setTitle] = useState(""); 
    // const [price, setPrice] = useState(0);
    // const [desc, setDesc] = useState("");
    const [product, setProduct] = useState("");
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + props.id)
            .then(res => {
                setProduct(res.data)
                // setTitle(res.data.title);
                // setPrice(res.data.price);
                // setDesc(res.data.desc);
                setLoaded(true);

            })
    }, []);

    const updateProduct = product => {
        axios.put('http://localhost:8000/api/product/' + props.id,
        //  {
        //     title,
        //     price,
        //     desc
        // }
        product
        )
            .then(res => console.log(res))
            .catch(err => console.error(err));
        // navigate('/')
        navigate(`/${props.id}`)
    }
    // console.log(title)
    return (
        <div>
            <h1>Update a Product</h1>
            {loaded && (
                <ProductForm
                    addToDom={updateProduct}
                    initialTitle={product.title}
                    initialPrice={product.price}
                    initialDesc={product.desc} />

            )}
        </div>
    )
}

export default Update;