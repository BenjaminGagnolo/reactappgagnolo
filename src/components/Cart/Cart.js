
import { useContext, useState, useRef } from "react";
import Togglable from '../Togglable/Togglable'
import CartContext from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import ContactForm from "../ContactForm/ContactForm";
import { useNotificationServices } from "../../services/notification/NotificationServices"
import { writeBatch, getDoc, doc, addDoc, collection, Timestamp } from 'firebase/firestore'
import { db } from '../../services/firebase/firebase'

const Cart = () => {

const [processingOrder, setProcessingOrder] = useState(false)

const [contact, setContact] = useState({
    name: '',
    phone: '',
    address: '',
    comment: ''
})

const {cart, clearCart, getTotal , removeItem} = useContext(CartContext)
const contactFormRef = useRef()

const setNotification = useNotificationServices()


/*if (cart.length === 0) {
    return<h2>No hay productos</h2>
}
const handleRemoveItem = (id, producto) => {
        removeItem(id)
        alert(`Se eliminó ${producto}`)
    } 
const handleClearAll =() =>{
        clearCart();
        alert(`Se eliminó carrito`)
}*/


const confirmOrder = () => {
    if(contact.phone !== '' && contact.address !== '' && contact.comment !== '' && contact.name !== '') {
        setProcessingOrder(true)
        
        const objOrder = {
            buyer: contact,
            items: cart,
            total: getTotal(),
            date: Timestamp.fromDate(new Date())
        }

        const batch = writeBatch(db)
        const outOfStock = []


const executeOrder = () => {
if(outOfStock.length === 0) {
                addDoc(collection(db, 'orders'), objOrder).then(({id}) => {
                    batch.commit().then(() => {
                        clearCart()
                        setNotification('success', `La orden se genero exitosamente, su numero de orden es: ${id}`)
                    })
                }).catch(error => {
                    setNotification('error', error)
                }).finally(() => {
                    setProcessingOrder(false)
                })
            } else {
                outOfStock.forEach(prod => {
                    setNotification('error', `No hay stock de ${prod.producto} `) //ver
                    removeItem(prod.id)
                })          
            }
        }


objOrder.items.forEach(prod => {
            getDoc(doc(db, 'Products', prod.id)).then(response => {
                if(response.data().stock >= prod.count) { //cambie cantiadad por count 
                    batch.update(doc(db, 'Products', response.id), {
                        stock: response.data().stock - prod.count // aca tambien 
                    })
                } else {
                    outOfStock.push({ id: response.id, ...response.data()})    
                }
            }).catch((error) => {
                console.log(error)
            }).then(() => {
                executeOrder()
            }).finally(() => {
                setProcessingOrder(false)
            })
        })
        
    } else {
        setNotification('error', 'Debe completar los datos de contacto para generar la orden')
    }
}

if(processingOrder) {
    return <h1>Su orden está siendo procesada</h1>
}

if(cart.length === 0) {
    return (
        <div>
            <h1>Cart</h1>
            <h2>No hay productos en el carrito</h2>
        </div>
    )
}


    return (
            <div>
                <h1>Cart</h1>
                { cart.map(p => <CartItem key={p.id} {...p}/>) }
                <h3>Total: $ {getTotal()}</h3>
                <button onClick={() => clearCart()} className="Button">Cancelar compra</button>
                <button onClick={() => confirmOrder()} className="Button">Confirmar Compra</button>
                {
                    (contact.phone !== '' && contact.address !== '' && contact.comment !== '' && contact.name !== '') &&
                    
                        <div>
                            <h4>Nombre: {contact.name}</h4>
                            <h4>Telefono: {contact.phone}</h4>
                            <h4>Direccion: {contact.address}</h4>
                            <h4>Comentario: {contact.comment}</h4>
                            <button onClick={() => setContact({ phone: '', address: '', comment: ''})} 
                                    className='Button' 
                                    style={{backgroundColor: 'rgb(43, 150, 199)'}}>
                                Borrar datos de contacto
                            </button>
                        </div>    
                }
                <Togglable buttonLabelShow={
                            (contact.phone !== '' && contact.address !== '' && contact.comment !== '' && contact.name !== '') 
                                ? 'Editar contacto' 
                                : 'Agregar contacto'
                            } 
                            ref={contactFormRef}>
                    <ContactForm toggleVisibility={contactFormRef} setContact={setContact} />
                </Togglable>          
            </div>
        )
 
}

export default Cart;