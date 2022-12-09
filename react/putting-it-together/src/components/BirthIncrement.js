import React, { Component } from 'react';
import styles from './BirthIncrement.module.css';


class BirthIncrement extends Component{

    constructor(props){
        super(props);
        this.state = {
            incrementedAge : this.props.age,
        };
    }
    change = () =>{
        console.log(this);
        this.setState({
            incrementedAge: this.state.incrementedAge + 1,
        });
        
    }
    render(){
        const {firstName, lastName, hairColor} = this.props;
        return(
            <fieldset>
            <h1>{firstName}, {lastName}</h1>
            <p>Age: {this.state.incrementedAge}</p>
            <p>Hair color: {hairColor}</p>
            <button className={ styles.btn } onClick={this.change}>Birthday button for {firstName} {lastName}</button>
        </fieldset>
        );
    }

}
export default BirthIncrement;