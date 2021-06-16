import axios from 'axios';
import React, {useState} from 'react';

const NewPerson = ({people, setPeople}) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState([]);
    const formHandler = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/person", {name, email})
            .then(res => {
                setPeople([...people, res.data]);
                setName("");
                setEmail("")
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
    return(
        <div>
            <h3>Add a Person</h3>
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

export default NewPerson;