
import { useContext } from "react";
import CartContext from "../../context/CartContext";



const Cart = () => {


const {cart, removeItem, clearCart} = useContext(CartContext)


if (cart.length === 0) {
    return<h2>No hay productos</h2>
}
const handleRemoveItem = (id, producto) => {
        removeItem(id)
        alert(`Se eliminó ${producto}`)
    } 
const handleClearAll =() =>{
        clearCart();
        alert(`Se eliminó carrito`)
}
        
    return (
        <>
        <h1>Cart</h1>
        {
         cart.map(prod => {
            return(
                <div key={prod.id}>
                            <card>
                            <h3>{prod.producto}</h3>
                            
                            <h3>Cantidad: {prod.cantidad}</h3>
                            <button onClick={() => handleRemoveItem(prod.id, prod.producto)}>X</button>
                            <button inClick={() => handleClearAll()}>Limpiar Carrito</button>
                            </card>
                            
                </div>
            )
        })   
        }
   
        </>
    )
}

export default Cart