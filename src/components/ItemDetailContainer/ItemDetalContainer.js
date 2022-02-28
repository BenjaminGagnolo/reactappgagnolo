import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import ItemDetail from "./ItemDetail.js"
import { getProduct } from '../Products/Products'
import { useParams } from 'react-router-dom'


const ItemDetailContainer = ({}) => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)
    const [counter, setCounter] = useState('button')


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
const FuncionCount = () => {
        if(counter === 'button'){
            setCounter('input')
        } else {
            setCounter('button')
        }
    }


    return (
        <div className="ItemDetailContainer" >
            <button onClick={FuncionCount} inputType={counter}>setCount</button>
            {
                loading? 
                        <h1>Cargando...</h1>:
                product?
                    <ItemDetail {...product} inputType={counter}/>:
                    <h1>No fue posible encontrar el producto</h1>
            }
            
        </div>
    )    
}
export default ItemDetailContainer;
