import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import ItemDetail from "./ItemDetail.js"
import { getProducts} from "../ItemListContainer/ItemListContainer"
import { useParams } from 'react-router-dom'
import { Products } from '../Products/Products'

const ItemDetailContainer = ({}) => {
    const [Products, setProduct] = useState([])
    const { productId } = useParams()
    

    useEffect(() => {
        getProducts(Products).then(item => {
            setProduct(item)
        })
        return (() => {
            setProduct()
        })

    }, [])


    return (
        <div className="ItemDetailContainer" >
            <ItemDetail  Products={Products}/>
        </div>
    )    
}
export default ItemDetailContainer