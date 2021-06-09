import React, {useEffect, useState} from 'react';
import axios from 'axios';

// Display details of a single product
const OneProduct = ({id}) =>{
    const [product, setProduct] = useState({
        name: "",
        category: "",
        price: 0
    });
    useEffect(()=>{
        axios.get("http://localhost:8000/api/product")
            .then(res => {
                setProduct(res.data.filter(prod => prod.name === id)[0])
            })
            .catch( err => console.log(err))
    }, [id])
    return(
        <div>
            <h1>{product.name}</h1>
            <h3>{product.category}</h3>
            <h3>$ {product.price}</h3>
        </div>
    )
}

export default OneProduct;