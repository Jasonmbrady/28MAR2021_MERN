import React from 'react';

// form to edit product
const EditProduct = ({setAddForm}) =>{
    const btnHandler = e => {
        e.preventDefault();
        setAddForm(true);
    }
    return(
        <div>
            <h1>EDIT</h1>
            <button onClick={btnHandler}>Add</button>
        </div>
    )
}

export default EditProduct;