import React, {useState} from 'react';
import Form from './Form';
import ShowName from './ShowName';

const NameParent = props => {
    const [name, setName] = useState("")
    const [isValid, setIsValid] = useState(true);
    return(
        <div>
            <Form 
            name={name} 
            setName={setName} 
            setIsValid={setIsValid}/>
            <ShowName name={name} isValid={isValid}/>
        </div>
    )
}

export default NameParent;