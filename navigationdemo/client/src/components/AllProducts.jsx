import React from 'react';
import {Link} from '@reach/router'

// Display a list of all products
const AllProducts = ({products}) =>{
    return(
        <div>
            {products.map((prod, idx)=>{
                return(
                    <p key={idx}><Link to={`/${prod.name}`}>{prod.name}</Link></p>
                )
            })}
        </div>
    )
}

export default AllProducts;