import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';
import { getProducts } from '../../services/firebase/firebase';
import { useNotificationServices } from '../../services/notification/NotificationServices';

function ItemListContainerF(){
const [products, setProducts] = useState({})

const [loading, setLoading] = useState(true)

const {id} = useParams()

const setNotification = useNotificationServices()

  useEffect(() =>{

    setLoading(true)

    getProducts(id).then(response => {
      setProducts(response)
    }).catch((error) => {
      setNotification('error',`Error buscando ${error}`)
    }).finally(() => {
      setLoading(false);
    })

    return(() => {
    setProducts()
  })
  }, [id])
 
  return(
    <>
    <div className='ItemListContainer'>
    {
             loading?
                   <h1>Cargando...</h1>:
             products.length ?
                   <ItemList  product={products}/>:
                   <h1>No fue posible encontrar el producto</h1>
    }
    </div>
    </>

  )
  }
   
export default ItemListContainerF;




