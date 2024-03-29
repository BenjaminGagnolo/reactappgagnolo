import './ItemDetail.css'
import { useState, useContext } from 'react';
import CartContext from '../../context/CartContext'
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { useNotificationServices } from '../../services/notification/NotificationServices';
const ItemDetail = ( { id, producto, img, price, description, stock, category } ) => {

const [count , setCount] = useState(0)
const [final, setFinal] = useState(false)

const { addItem } = useContext(CartContext)

const setNotification = useNotificationServices()
const handleOnAdd = (count) => {
    setCount(count)
    
    const productToAdd = {
        id,
        producto,
        img,
        price,
        description,
        stock,
        cantdad : count,
        category
    }
   
    addItem(productToAdd, count)
    setNotification('success',`Se agrego ${producto} al carrito`)
    setFinal(true)
    
    //console.log(productToAdd);
}
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
         <footer className='ItemFooter'>
         {!final ? (
         <ItemCount 
         count = {count}
         increment = {Increment}
         decrement = {Decrement}
         onAdd = {handleOnAdd}
         
         />
         ) : (
             <Link to= { '/cart' }>
                 <button>Ir al carrito</button>
             </Link>
         )}
            </footer>
        
        </div>
    )
}

export default ItemDetail;
