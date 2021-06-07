import React from 'react';

const PersonForm = ({formHandler, fName, setFName, lName, setLName, age, setAge}) => {

    
    return(
        <form onSubmit={formHandler}>
            <div>
                <label>First Name</label>
                <input type="text" value={fName} onChange={ e => setFName(e.target.value)}/>
            </div>
            <div>
                <label>Last Name</label>
                <input type="text" value={lName} onChange={ e => setLName(e.target.value)}/>
            </div>
            <div>
                <label>Age</label>
                <input type="number" value={age} onChange={e => setAge(e.target.value)}/>
            </div>
            <button>Submit</button>
        </form>
    )
}

export default PersonForm;