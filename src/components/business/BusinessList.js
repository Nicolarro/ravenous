import React from "react";
import Business from "./Business";


const arrayBusiness = [];
console.log(arrayBusiness)

export default function BusinessList({Business}) {
  const listadoBusiness = arrayBusiness.map((element) => {
    return listadoBusiness.push(element);
  });
  console.log(listadoBusiness);
  return <div>
    
    {listadoBusiness}
    <Business/>
  
  </div>;
}
