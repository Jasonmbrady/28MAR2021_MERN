import React, {useState} from 'react';
import {Router} from '@reach/router';
import PersonParent from './PersonParent';
import CreatePerson from './CreatePerson';
import UpdatePerson from "./UpdatePerson";
const FormSelect = (props) => {
    const [people, setPeople] = useState([{
        fName: "",
        lName: "",
        age: 999
    }])
    return(
        <div>
            <Router>
                <PersonParent path="/" 
                people={people}
                setPeople={setPeople}
                />
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

export default FormSelect;