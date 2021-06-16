import axios from 'axios';
import React, {useState} from 'react';
import {navigate} from '@reach/router'

const ListPeople = ({people, setPeople}) => {
    const [errors, setErrors] = useState([])

    const delHandler = e => {
        e.preventDefault();
        axios.delete("http://localhost:8000/api/person/" + e.target.id)
            .then( res => {
                setPeople( people.filter(person => person._id !== e.target.id));
            })
            .catch( err => {
                const errRes = err.response.data.errors;
                const errArr = [];
                for(const key of Object.keys(errRes)){
                    errArr.push(errRes[key].message)
                }
                setErrors(errArr);
            })
    }
    const editHandler = e => {
        e.preventDefault();
        navigate("/update/" + e.target.id)
    }
    return(
        <div>
            {errors.map((err, idx)=>{
                return(
                    <p key={idx} style={{color: "red"}}>{err}</p>
                )
            })}
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {people.map((person, idx)=>{
                        return(
                            <tr key={idx}>
                                <td>{person.name}</td>
                                <td>{person.email}</td>
                                <td>
                                    <button id={person._id} onClick={editHandler}>Edit</button>
                                    <button id={person._id} onClick={delHandler}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ListPeople;