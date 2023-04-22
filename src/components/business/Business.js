import React from "react";
import { data } from "./data";

const { image, name, address, city, state, zipcode, category, rating, reviewCount } = data

console.log(image)

const imageUrl = <img src={image} alt="comida-rapida-casera" border="0" style={{ height: "5rem", widows: "5rem" }} />

function Business() {
    console.log(data)

    /*     const listado = data.array.forEach(element => {
    
        }); */

    return (
        <div>
            <h1>{name}</h1>
            <h2>{address}</h2>
            <h2>{city}</h2>
            <h2>{state}</h2>
            <h2>{zipcode}</h2>
            <h2>{category}</h2>
            <h2>{rating}</h2>
            <h2>{reviewCount}</h2>
            {imageUrl}
        </div>
    )
}

export default Business;