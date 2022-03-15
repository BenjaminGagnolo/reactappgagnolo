import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import ItemDetail from "./ItemDetail.js"
import { useParams } from 'react-router-dom'
import {getDoc, doc} from "firebase/firestore"
import { getProductById } from '../../services/firebase/firebase'
import { db } from '../../services/firebase/firebase'
import { useNotificationServices } from '../../services/notification/NotificationServices'

const ItemDetailContainer = ({}) => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    
    const { productId } = useParams()

    const setNotification = useNotificationServices()

    useEffect(() => {

setLoading(true)

getProductById(productId).then(response => {
    setProduct(response)
}).catch((error) => {
    setNotification('error',`Buscando producto: ${error}`)
}).finally(() =>{
    setLoading(false)
})

        return (() => {

            setProduct()

        })

    }, [productId])



    return (
        <div className="ItemDetailContainer" >
            
            {
                loading? 
                        <h1>Cargando...</h1>:
                product?
                    <ItemDetail {...product} />:
                    <h1>No fue posible encontrar el producto</h1>
            }
            
        </div>
    )    
}
export default ItemDetailContainer;
