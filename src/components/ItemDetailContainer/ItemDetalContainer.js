import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import ItemDetail from "./ItemDetail.js"
import { getProduct } from '../Products/Products'
import { useParams } from 'react-router-dom'


const ItemDetailContainer = ({}) => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)


    const { productId } = useParams()
    

    useEffect(() => {
        getProduct(productId).then(item => {
            setProduct(item)
        }).catch(err  => {
            console.log(err)
        }).finally(() => {
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
                    <ItemDetail  product={product}/>:
                    <h1>No fue posible encontrar el producto</h1>
            }
            
        </div>
    )    
}
export default ItemDetailContainer;
