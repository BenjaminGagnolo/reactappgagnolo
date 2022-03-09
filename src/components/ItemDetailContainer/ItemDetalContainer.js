import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import ItemDetail from "./ItemDetail.js"
import { getProduct } from '../Products/Products'
import { useParams } from 'react-router-dom'
import {getDoc, doc} from "firebase/firestore"
import { db } from '../../services/firebase/firebase'

const ItemDetailContainer = ({}) => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    
    const { productId } = useParams()
    

    useEffect(() => {

setLoading(true)
const docRef = doc(db, "Products", productId)
getDoc(docRef).then(response =>{
    const product = {id: response.id, ...response.data()}
    setProduct(product)
}).finally(() =>{
    setLoading(false)
})
        /*getProduct(productId).then(item => {
            setProduct(item)
        }).catch(err  => {
            console.log(err)
        }).finally(() => {
            setLoading(false)
        })*/


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
