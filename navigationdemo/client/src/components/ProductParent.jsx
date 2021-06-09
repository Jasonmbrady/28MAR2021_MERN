import axios from 'axios';
import React, {useEffect, useState} from 'react';
import AddProduct from './AddProduct';
import AllProducts from './AllProducts';
import EditProduct from './EditProduct';

// Container component for product list and forms
const ProductParent = (props) =>{
    const [addForm, setAddForm] = useState(true);
    const [products, setProducts] = useState([{
        name: "Shrimp",
        category: "Food",
        price: 10
    }])

    useEffect(() => {
        axios.get("http://localhost:8000/api/product")
        .then(res=> setProducts(res.data));
    }, [])
    
    return(
        <div>
            {
                addForm
                ? <AddProduct setAddForm={setAddForm} products={products} setProducts={setProducts}/>
                : <EditProduct setAddForm={setAddForm} products={products} setProducts={setProducts}/>
            }
            <hr></hr>
            <AllProducts products={products}/>
        </div>
    )
}

export default ProductParent;