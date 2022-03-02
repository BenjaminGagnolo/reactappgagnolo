import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';
import { getProducts } from '../Products/Products';
import { useParams } from 'react-router-dom';



function ItemListContainerF(){
const [products, setProducts] = useState({})

const [loading, setLoading] = useState(true)

const {id} = useParams()



  useEffect(() =>{

    setLoading(true)

    getProducts().then(item =>{
      if(id){ 
        setProducts(item.filter(p => p.category === id))
      }else{
        setProducts(item)
      }
       
    }).catch(err  => {
      console.log(err)
    }).finally(() => {
      setLoading(false)
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




