import React, {useState, useEffect} from 'react';
import PersonForm from './PersonForm';
import axios from 'axios';
import { navigate } from '@reach/router';


const UpdatePerson = ({id, people, setPeople}) => {
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [age, setAge] = useState(0);
    const [errors, setErrors] = useState([]);

    useEffect(()=>{
        const thisPerson = people.filter(person => person._id === id)[0];
        console.log(thisPerson);
        setFName(thisPerson.fName);
        setLName(thisPerson.lName);
        setAge(thisPerson.age);
    }, [id, people])

    const updateHandler = e =>{
        e.preventDefault();
        const updatedPerson = {
            fName,
            lName,
            age
        }
        axios.put(`http://localhost:8000/api/person/${id}`, updatedPerson)
            .then( res => {
                let tempArr = [...people];
                for (let i=0; i< tempArr.length; i++){
                    if(tempArr[i]._id === id){
                        tempArr[i] = res.data;
                    }
                }
                setPeople(tempArr);
                navigate("/")
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
            <h1>Update {fName} {lName}</h1>
            <PersonForm 
            formHandler={updateHandler}
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

export default UpdatePerson;