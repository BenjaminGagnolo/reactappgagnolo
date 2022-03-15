import './CartItem.css';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';



const CartItem = ({ id, producto, count, price }) => {
    const { removeItem } = useContext(CartContext)

    const handleRemove = () => {
        removeItem(id)
    }

    return (
        <article className='CardCartItem'>
            <header className="HeaderCartItem">
                <h2 className="ItemHeaderCartItem">
                    {producto}
                </h2>
            </header>
            <section className='ContainerItemCartItem'>
                <p className="InfoCartItem">
                    Cantidad: {count}
                </p>
                <p className="InfoCartItem">
                    Precio x Unidad: $ {price}
                </p>
            </section>           
            <footer className='ItemFooterCartItem'>
                 <p className="InfoCartItem">
                     Subtotal: ${price * count}
                 </p>
                 <button className='ButtonCartItem' onClick={() => handleRemove()}><b>ELIMINAR</b></button>
            </footer>
        </article>
    )
}

export default CartItem