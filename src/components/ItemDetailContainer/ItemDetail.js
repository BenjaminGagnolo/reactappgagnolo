import './ItemDetail.css'
import { useState } from 'react';

import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

const ItemDetail = ( { id, producto, img, price, description, stock } ) => {

const [count , setCount] = useState(0)
const [final, setFinal] = useState(false)


const Increment = () => {
    if (count < stock){
        setCount(count + 1)  
        }
        if (count === 15){
        setCount(count - stock)
        }
}

const Decrement = () => {
    if(count > 0) {
        setCount(count - 1)
    }
}

    return (
       
         <div className="Ofertas" key={id}>
         <h3 id="nombre_img" >{producto}</h3>
         <p><b>Detalle:<br></br></b>{description}</p>
         <img  src={img} alt="Products"></img>
         <p>${price}</p>
         {!final ? (
         <ItemCount 
         count = {count}
         increment = {Increment}
         decrement = {Decrement}
         onAdd = {() => setFinal(true)}
         
         />
         ) : (
             <Link to= { '/cart' }>
                 <button>Finalizar compra</button>
             </Link>
         )}       
        
        
        </div>
    )
}

export default ItemDetail;
