import { navigate } from '@reach/router';
import React, { useEffect, useState } from 'react'
import Nav from './Nav';

const Dash = (props) => {
    const input = props.something;

    // useEffect(() => {
    //     if (isNaN(input)) {
    //         console.log("this is a string")
    //     }
    //     else if (!isNaN(input) && ( props.color!== undefined )) {
    //         navigate('/');
    //     }
    //     else {
    //         console.log("this is a number")
    //     }

    // }, []);

    console.log(props.color);

    const myStyle = {
        color: props.color,
        backgroundColor: props.bColor,
    }


    return (
        <div>
            {/* <Nav/> */}
            {!isNaN(input)?
                <h1 style={myStyle}>The number is: {input}</h1>
                : <h1 style={myStyle}>The word is: {input}</h1>
            }

        </div>
    );
}

export default Dash
