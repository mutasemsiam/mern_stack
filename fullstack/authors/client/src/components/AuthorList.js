import React, { useEffect, useState } from 'react'
import { Link } from '@reach/router';
import DeleteButton from './DeleteButton';
import { Button } from '@material-ui/core';
// import 'bootstrap/dist/css/bootstrap.min.css';

const AuthorList = (props) => {
    const [authorList, setAuthorList] = useState([]);

    const removeFromDom = authorId => {
        setAuthorList(authorList.filter(author => author._id != authorId))
    }

    useEffect(() => {
        setAuthorList(props.author);
    }, [props.author])

    return (
        <div>

            
                <Link to="/new">
                    Add an author
                </Link>
                <p>We have qoutes by:</p>
            
            {authorList.map((author, idx) => {
    return (
        <p key={idx}>
            <Link to={"/" + author._id}>
                {author.name}
            </Link>
            |
            <Link to={"/" + author._id + "/edit"}>
            <Button type="submit" variant="contained" color="primary">Edit</Button>
                
            </Link> 
            |
           <DeleteButton authorId={author._id} successCallback={()=>removeFromDom(author._id)}/>
        </p>
    )
})}
        </div>
    );
}

export default AuthorList;



// Mapping withoud bootstrap:



