import React from 'react';
import axios from 'axios';

const DeleteButton = (props) => {

    
        const {successCallback, productId} = props;
        const deleteProduct = e => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                successCallback();
            })
            .catch(err => console.error(err));
        }
    return (
       
            <button onClick={deleteProduct }>
                Delete
            </button>
    )
}


export default DeleteButton
