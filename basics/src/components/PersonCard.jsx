import React from 'react';

const PersonCard = ({user}) => {
    
    return(
        <div>
            <h1>{user.username}</h1>
            <p>Age: {user.userage}</p>
            <p>Hair Color: {user.userhair}</p>
        </div>
    )
}

export default PersonCard;