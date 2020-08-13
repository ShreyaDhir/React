import React from "react";
import products from "./vschoolProducts.js";

function Products(props)
{
    return (
     <div>
       <h3>{props.products.name}</h3>
       <p>₹{props.products.price} - {props.products.description}</p>
     </div>   
    )
}

export default Products;