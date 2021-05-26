import React, {useState} from 'react';

const Counter = props =>{
    const [count, setCount] = useState(0);
    const clickHandler = e => {
        e.preventDefault();
        setCount(count + 1);
    }

    return(
        <div>
            <h2>Count: {count}</h2>
            <button onClick={clickHandler}>+1</button>
        </div>
    )
}

export default Counter;