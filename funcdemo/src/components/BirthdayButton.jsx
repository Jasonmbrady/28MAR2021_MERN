import React from 'react';

const BirthdayButton = props => {
    const {getAge, setAge} = props;
    const ageHandler = e => {
        e.preventDefault()
        setAge(getAge + 1);
    }
    return(
        <button onClick={ageHandler}>BIRTHDAY!</button>
    )
}

export default BirthdayButton;