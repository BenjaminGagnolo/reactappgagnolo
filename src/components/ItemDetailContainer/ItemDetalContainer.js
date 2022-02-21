
import { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import { getProducts } from '../ItemListContainer/ItemListContainer'
import './ItemDetailContainer.css'

const ItemDetailContainer = ({ id }) => {
    const [product, setProduct] = useState()

    useEffect(() => {
        getProducts(id).then(item => {
            setProduct(item)
        }).catch(Error  => {
            console.log(Error)
        })

        return (() => {
            setProduct()
        })

    }, [])


    return (
        <div className="ItemDetailContainer" >
            <ItemDetail  product={product}/>
        </div>
    )    
}
export default ItemDetailContainer;