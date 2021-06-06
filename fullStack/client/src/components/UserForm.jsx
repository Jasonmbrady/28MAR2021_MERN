import React, {useState} from 'react';
import axios from "axios";

const UserForm = props =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const formHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/user', {
            name,
            email,
            password
        })
            .then( res => console.log(res))
            .catch( err => console.log(err));

    }
    return(
        <form onSubmit={formHandler}>
            <div>
                <label>Name</label>
                <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
            </div>
            <div>
                <label>Email</label>
                <input type="text" value={email} onChange={e=>setEmail(e.target.value)}/>
            </div>
            <div>
                <label>Password</label>
                <input type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
            </div>
            <button>Submit</button>
        </form>
    )
}

export default UserForm;