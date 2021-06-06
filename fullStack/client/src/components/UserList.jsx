import React from 'react';
import {Link} from "@reach/router";


const UserList = ({users, deleteHandler}) => {
    
    return(
        <ul>
            {users.map((user, idx)=>{
                return(
                    <li key={idx}><Link to={`/${user._id}`}>{user.name}</Link>: {user.email} <button id={user._id} onClick={deleteHandler}>DELETE</button> <button><Link to={`/update/${user._id}`}>UPDATE</Link></button> 
                    </li>
                )
            })}
        </ul>
    )
}

export default UserList;