import React, {useEffect} from 'react';
import {Link} from '@reach/router';
import axios from 'axios';
import DeleteButton from './DeleteButton';

const PersonParent = ({people, setPeople}) => {
    
    useEffect(()=>{
        axios.get("http://localhost:8000/api/person")
            .then(res => setPeople(res.data))
            .catch(err => console.log(err))
    }, [setPeople])
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
                
        </div>
    )
}

export default PersonParent;