import React from 'react';


const UserForm = ({formHandler, name, setName, email, setEmail, password, setPassword}) =>{



    return(
        <form onSubmit={formHandler}>
            <div>
                <label>Name</label>
                <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
            </div>
            <div>
                <label>Email</label>
                <input type="text" value={email} onChange={e=>setEmail(e.target.value)}/>
            </div>
            <div>
                <label>Password</label>
                <input type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
            </div>
            <button>Submit</button>
        </form>
    )
}

export default UserForm;