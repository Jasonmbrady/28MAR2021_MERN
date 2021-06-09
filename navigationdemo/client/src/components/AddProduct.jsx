import React from 'react';

// form to add products to DB
const AddProduct = ({setAddForm}) =>{
    const btnHandler = e =>{
        e.preventDefault();
        setAddForm(false);
    }
    return(
        <div>
            <h1>ADD</h1>
            <button onClick={btnHandler}>Edit</button>
        </div>
    )
}

export default AddProduct;