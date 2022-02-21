import { useState } from 'react';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';
import { useEffect } from "react";
import { Products } from "../Products/Products";

const functionOnAdd = (count) => {
  console.log(`Se agregaron ${count} productos al carrito`)
}

const getProducts = ({Products}) =>{

  return new Promise((resolve) =>{
      setTimeout(() =>{
      resolve(Products)
      },2000)
  }
  )}

function ItemListContainerF(){
const [productos, setProductos] = useState([])

  useEffect(() =>{
    getProducts({Products}).then(Products =>{
      console.log(Products); 
      setProductos(Products)
    })
  }, [productos])


  
  return(
    <>
    
    {productos.length > 0 ? (
     <div>
     <ItemList  items={productos}/>
    </div> 
    ):("Cargando..." )}
    
    </>

  )
  }
   
export default ItemListContainerF;
export {getProducts}; 


