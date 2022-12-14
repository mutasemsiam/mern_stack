import React, { useState } from 'react'
import axios from 'axios';
export default (props) => {
    //keep track of what is being typed via useState hook
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState(0);
    const [desc, setDesc] = useState("");
    const { addToDom } = props;

    //handler when the form is submitted
    
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        // make a post request to create a new product
        axios.post('http://localhost:8000/api/product', {
            title,
            price,
            desc
        })
            .then(res=>{addToDom(res.data.product);console.log("yessss")})
            .catch(err=>{console.log(err); console.log('heyyy')})
    
    }

    //onChange to update title, price and description
    return (
        <>
        <h1>Product Manager</h1>
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title: </label><br/>
                <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
            </p>
            <p>
                <label>Price: </label><br/>
                <input type="number" onChange={(e)=>setPrice(e.target.value)} value={price}/>
            </p>
            <p>
                <label>Description: </label><br/>
                <input type="text" onChange={(e)=>setDesc(e.target.value)} value={desc}/>
            </p>
            <input type="submit"/>
        </form>
        </>
    )
}