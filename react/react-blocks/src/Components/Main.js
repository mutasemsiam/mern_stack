import React, { Component } from 'react';

class Main extends Component{

    render(){
        const mainStyle = {
            width: '70%',
            height: '650px',
            backgroundColor: '#e06666',
            padding: '15px',
            // marginLeft: '20px',
            // marginBottom: '20px',
            margin: '0 20px 20px 20px',
            borderStyle: 'solid',
            // display: 'inline-block',
        };
        return(
     
        <div style={mainStyle}>
        {this.props.children}
        </div>
        );
    }

}
export default Main;