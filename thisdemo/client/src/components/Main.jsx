import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ListPeople from "./ListPeople";
import NewPerson from './NewPerson';

const Main = (props) => {
    const [people, setPeople] = useState([]);
    const [errors, setErrors] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/person')
            .then( res => setPeople(res.data))
            .catch( err => {
                const errRes = err.response.data.errors;
                const errArr = [];
                for(const key of Object.keys(errRes)){
                    errArr.push(errRes[key].message)
                }
                setErrors(errArr);
            })
    }, [])
    return(
        <div>
            {errors.map((err, idx)=>{
                return(
                    <p key={idx} style={{color: "red"}}>{err}</p>
                )
            })}
            <NewPerson people={people} setPeople={setPeople}/>
            <hr />
            <ListPeople people={people} setPeople={setPeople}/>
        </div>
    )
}

export default Main;