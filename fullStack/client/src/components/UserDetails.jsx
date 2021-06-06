import axios from 'axios';
import React, {useState, useEffect} from 'react';

const UserDetails = ({id}) => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    })
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/user/${id}`)
            .then(res => setUser(res.data))
            .catch(err => console.log(err))
    }, [id])

    return(
        <div>
            <h1>{user.name}</h1>
            <h3>{user.email}</h3>
            <h3>{user.password}</h3>
        </div>
    )
}

export default UserDetails;