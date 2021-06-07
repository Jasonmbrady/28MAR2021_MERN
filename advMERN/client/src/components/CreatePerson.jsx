import React, {useState} from 'react';
import PersonForm from './PersonForm';
import axios from "axios";
import {navigate} from '@reach/router'

const CreatePerson = ({people, setPeople}) => {
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [age, setAge] = useState(0);
    const [errors, setErrors] = useState([]);

    const createHandler = e => {
        e.preventDefault();
        const newPerson = {
            fName,
            lName,
            age
        }
        axios.post("http://localhost:8000/api/person", newPerson)
            .then( res => {
                setPeople([...people, res.data]);
                navigate('/');
            })
            .catch(err => {
                const errRes = err.response.data.errors;
                const errArr = [];
                console.log(errRes);
                for (const key of Object.keys(errRes)){
                    errArr.push(errRes[key].message);
                }
                setErrors(errArr);
            })
    }
    return(
        <div>
            <h1>Create a Person</h1>
            <PersonForm 
            formHandler={createHandler}
            fName={fName}
            setFName={setFName}
            lName={lName}
            setLName={setLName}
            age={age}
            setAge={setAge}
            />
            {errors.map((err, idx) => {
                return(
                    <p key={idx}>{err}</p>
                )
            })}
        </div>
    )
}

export default CreatePerson;