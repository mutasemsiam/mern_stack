import React, { Component } from 'react';


class PersonCard extends Component {
    render() {
        const { firstName, lastName, age, hairColor } = this.props;
        return (
            <div>
                <h1>{firstName}, {lastName}</h1>
                <p>Age: {age}</p>
                <p>Hair color: {hairColor}</p>
                <hr></hr>

            </div>
        );

    }
}

export default PersonCard

