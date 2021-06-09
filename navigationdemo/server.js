const express = require('express')
const app = express();
const cors = require('cors');
app.use(cors());

const products = [
    {
        name: "Shrimp",
        category: "Food",
        price: 10
    },
    {
        name: "Laptop",
        category: "Eectronics",
        price: 2000
    },
    {
        name: "T-shirt",
        category: "Apparel",
        price: 20
    },
    {
        name: "Table",
        category: "Furniture",
        price: 60
    }
]
app.get("/api/product", (req,res) => {
    res.json(products)
})

app.listen(8000, ()=> console.log("Express running on port 8000"));