import React, {useState, useEffect} from 'react';
import CreatePerson from './CreatePerson';
import {Link, Router} from '@reach/router';
import UpdatePerson from './UpdatePerson';
import axios from 'axios';
import DeleteButton from './DeleteButton';

const PersonParent = (props) => {
    const [people, setPeople] = useState([{
        fName: "",
        lName: "",
        age: 999
    }])
    useEffect(()=>{
        axios.get("http://localhost:8000/api/person")
            .then(res => setPeople(res.data))
            .catch(err => console.log(err))
    }, [])
    const deleteHandler = personId => {
        const tempArr = people.filter( person => person._id !== personId);
        setPeople(tempArr);
    }

    return(
        <div>
            <h1><Link to={"/create"}>Click Here</Link> to create a new person!</h1>
            <table>
                <tbody>
                    <tr>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>Age</td>
                        <td>Actions</td>
                    </tr>
                {
                    people.map((person, idx)=>{
                        return(
                            <tr key={idx}>
                                <td>
                                    {person.fName}
                                </td>
                                <td>
                                    {person.lName}
                                </td>
                                <td>{person.age}</td>
                                <td><button><Link to={`/update/${person._id}`}>EDIT</Link></button><DeleteButton deleteId={person._id} callback={deleteHandler}/></td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
            <Router>
                <CreatePerson 
                    people={people} 
                    setPeople={setPeople}
                    path="/create"
                />
                <UpdatePerson 
                    people={people} 
                    setPeople={setPeople}
                    path="/update/:id"
                />
            </Router>
        </div>
    )
}

export default PersonParent;