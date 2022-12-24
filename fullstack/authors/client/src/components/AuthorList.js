import React, { useEffect, useState } from 'react'
import { Link } from '@reach/router';
import DeleteButton from './DeleteButton';
import { Button } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';

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

            <div>
                <Link to="/new">
                    Add an author
                </Link>
                <p>We have qoutes by:</p>
            </div>
            {authorList.map((author, idx) => {
                return (

                    <p key={idx}>
                        <table class="table table-striped" style={{ width: '50%', margin: '0 auto' }}>
                            <thead>
                                <tr>
                                    <th scope="col">Author</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='col-6'>   <Link to={"/" + author._id}>
                                        {author.name}
                                    </Link></td>
                                    <td> <Link to={"/" + author._id + "/edit"}>
                                        <Button type="submit" variant="contained" color="primary">Edit</Button>

                                    </Link>
                                        |
                                        <DeleteButton authorId={author._id} successCallback={() => removeFromDom(author._id)} /></td>

                                </tr>

                            </tbody>
                        </table>

                    </p>
                )
            })}
        </div>
    );
}

export default AuthorList;



// Mapping withoud bootstrap:

// {authorList.map((author, idx) => {
//     return (
//         <p key={idx}>
//             <Link to={"/" + author._id}>
//                 {author.name}
//             </Link>
//             |
//             <Link to={"/" + author._id + "/edit"}>
//             <Button type="submit" variant="contained" color="primary">Edit</Button>
                
//             </Link> 
//             |
//            <DeleteButton authorId={author._id} successCallback={()=>removeFromDom(author._id)}/>
//         </p>
//     )
// })}

