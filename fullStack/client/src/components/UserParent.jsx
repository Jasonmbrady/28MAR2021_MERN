import React, {useEffect, useState} from 'react';
import axios from 'axios';
import UserForm from "../components/UserForm";
import Main from "../Main";
import UserList from "../components/UserList"
import UserDetails from "../components/UserDetails"
import {Router} from "@reach/router";
import UserUpdate from './UserUpdate';

const UserParent = props =>{
    const [users, setUsers] = useState([{
        name: "loading...",
        email: "loading...",
        password: "loading..."
    }])
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    useEffect(()=>{
        axios.get("http://localhost:8000/api/user")
            .then( res => setUsers(res.data))
            .catch(err => console.log(err))
    }, [users])

    const formHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/user', {
            name,
            email,
            password
        })
            .then( res => {
                console.log(res);
                setUsers([...users, res.data]);
                setName("");
                setEmail("");
                setPassword("");
            })
            .catch( err => console.log(err));

        }
    const deleteHandler = e => {
        e.preventDefault();
        axios.delete(`http://localhost:8000/api/user/${e.target.id}`)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))

    }
    const updateHandler = e => {
        e.preventDefault();
        const updateUser = {
            name,
            email,
            password
        }
        axios.put(`http://localhost:8000/api/user/${e.target.id}`, updateUser)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }
    return(
        <div>
            <Main />
            <Router>
                <UserForm formHandler={formHandler} 
                            name={name}
                            setName={setName}
                            email={email}
                            setEmail={setEmail}
                            password={password}
                            setPassword={setPassword}
                            path="/"
                            />
                <UserUpdate updateHandler={updateHandler} 
                            name={name}
                            setName={setName}
                            email={email}
                            setEmail={setEmail}
                            password={password}
                            setPassword={setPassword}
                            path="/update/:id"
                            />
            </Router>
            <Router>
                <UserList users={users} deleteHandler={deleteHandler} path="/"/>
                <UserDetails path="/:id" />
            </Router>

        </div>
    )
}

export default UserParent;
