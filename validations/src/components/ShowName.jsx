import React from 'react';

const ShowName = props => {
    const {name, isValid} = props;
    const validator = () => {
        if (!isValid){
            return "Name must be 3+ characters"
        } else {
            return "";
        }
    }
    return(
        <div>
            <h1>{name}</h1>
            <h3>{validator()}</h3>
        </div>
    )
}

export default ShowName;