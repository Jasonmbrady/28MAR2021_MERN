import React, {useState} from 'react';
import PersonCard from './PersonCard'
import PersonSwap from './PersonSwap';

const PersonParent = (props) => {
    const [user, setUser] = useState({
        username: "Corey",
        userage: 28,
        userhair: "Light Brown",
    })
   
    return(
        <div>
            <PersonCard user={user}/>
            <PersonSwap setUser={setUser} />
        </div>
    )
}

export default PersonParent;