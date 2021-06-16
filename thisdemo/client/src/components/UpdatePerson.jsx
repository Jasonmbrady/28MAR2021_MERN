import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {navigate} from '@reach/router'
const UpdatePerson = ({id}) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8000/api/person/" + id)
            .then(res => {
                setName(res.data.name);
                setEmail(res.data.email);
            })
            .catch( err => { console.log(err)
                // const errRes = err.response.data.errors;
                // const errArr = [];
                // for(const key of Object.keys(errRes)){
                //     errArr.push(errRes[key].message)
                // }
                // setErrors(errArr);
            })
    }, [id])
    const formHandler = e => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/person/" + id, {name, email})
            .then(res => navigate("/"))
            .catch( err => {
                const errRes = err.response.data.errors;
                const errArr = [];
                for(const key of Object.keys(errRes)){
                    errArr.push(errRes[key].message)
                }
                setErrors(errArr);
            })
    }
    return(
        <div>
             {errors.map((err, idx)=>{
                return(
                    <p key={idx} style={{color: "red"}}>{err}</p>
                )
            })}
            <form onSubmit={formHandler}>
                <label>Name</label>
                <input type="text" value={name} onChange={e => setName(e.target.value)}/>
                <label>Email</label>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default UpdatePerson;