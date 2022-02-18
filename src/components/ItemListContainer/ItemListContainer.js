
import { useState } from 'react';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';
import ItemCount from "../ItemCount/ItemCount";
import { useEffect } from "react";
import { Products } from "../Products/Products";





const functionOnAdd = (count) => {
  console.log(`Se agregaron ${count} productos al carrito`)
}

/*const ItemListContainer = [
   {id :1, producto: "Remeras", img: Remeras2},
   {id :2, producto: "Pantalones", img: Pantalones},
   {id :3, producto: "Calzado", img: Zapas}
]*/
const getProducts = ({Products}) =>{

  return new Promise((resolve) =>{
      setTimeout(() =>{
      resolve(Products)
      },5000)
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
   
   /*ItemListContainer.map(e => { 
       return(
         <div className="Ofertas" key={e.id}>
              <h3 id="nombre_img" >{e.producto}</h3>
              <img  src={e.img} alt="Products"></img>
             <ItemCount stock={5} initial={0} onAdd={functionOnAdd} />
        </div> 
        )
  }    
  )*/
  )
  }
   
export default ItemListContainerF;


