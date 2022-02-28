import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';
import { getProducts } from '../Products/Products';



function ItemListContainerF(){
const [products, setProducts] = useState({})

const [loading, setLoading] = useState(true)

  useEffect(() =>{

    getProducts().then(item =>{
      setProducts(item) 
    }).catch(err  => {
      console.log(err)
    }).finally(() => {
      setLoading(false)
    })
    return(() => {
    setProducts()
  })
  }, [])
 
  return(
    <>
    <div className='ItemListContainer' onClick={() => console.log("se hizo click en ItmLC")}>
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




