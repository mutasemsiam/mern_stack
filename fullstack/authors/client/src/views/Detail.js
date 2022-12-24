import React, { useEffect, useState } from 'react'
import axios from 'axios';
    
const Detail = (props) => {
    const [author, setAuthor] = useState({})
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/author/' +props.something)
            .then(res => setAuthor(res.data))
            .catch(err => console.error(err));
    }, []);
    
    return (
        <div>
            <p>Name: {author.name}</p>
        </div>
    )
}
    
export default Detail;

