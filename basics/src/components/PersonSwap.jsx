import React from 'react';

const PersonSwap = ({setUser}) => {
    const clickHandler = e => {
        e.preventDefault();
        setUser({
            username:"Jason",
            userage: 42,
            userhair: "Brown"
        })
    }
    return (
        <button onClick={clickHandler}>SWAP!</button>
    )
}

export default PersonSwap;