import React, {useState} from 'react';

const UserForm = props => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const formHandler = e => {
        e.preventDefault();
        const newUser = {username, password};
        console.log("Welcome", newUser);
    }

    const userHandler = e => {
        setUsername(e.target.value);
    }
    const passHandler = e => {
        setPassword(e.target.value)
    }

    return(
        <form onSubmit={formHandler}>
            <div>
                <label>Username: </label>
                <input type="text" onChange={userHandler}/>
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={passHandler}/>
            </div>
            <button>submit</button>
        </form>
    );
}

export default UserForm;