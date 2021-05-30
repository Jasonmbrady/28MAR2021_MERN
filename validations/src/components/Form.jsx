import React from 'react';

const Form = props => {
    const {name, setName, setIsValid} = props;

    const nameHandler = event => {
        setName(event.target.value);
        if(name.length < 3){
            setIsValid(false);
        } else {
            setIsValid(true);
        }
    }
    return(
        <form onSubmit={e => e.preventDefault()}>
            <div>
                <label>Name:</label>
                <input type="text" onChange={nameHandler}/>
            </div>
            <button>Submit</button>
        </form>
    )
}

export default Form;