import React, { useState } from 'react'
export default (props) => {
    const {initialTitle, initialPrice, initialDesc} = props;
    const [title, setTitle] = useState(initialTitle); 
    const [price, setPrice] = useState(initialPrice);
    const [desc, setDesc] = useState(initialDesc);
    const { addToDom } = props;

    
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        // make a post request to create a new product
        addToDom({title, price, desc});
    
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