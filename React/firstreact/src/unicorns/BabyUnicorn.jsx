import React, { Component } from 'react';

class BabyUnicorn extends Component {
    render(){
        const {name, age} = this.props;
        

        return <h1>Hello, my name is {name} and I am {age} years old!</h1>

    }
}

export default BabyUnicorn;