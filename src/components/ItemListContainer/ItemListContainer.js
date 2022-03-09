import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';
//import { getProducts } from '../Products/Products';
import { useParams } from 'react-router-dom';
import {getDocs, collection, query, where} from "firebase/firestore"
import { db } from '../../services/firebase/firebase';

function ItemListContainerF(){
const [products, setProducts] = useState({})

const [loading, setLoading] = useState(true)

const {id} = useParams()


const collectionRef = id?
      query(collection(db, "Products"), where("category", "==", id)) :
      collection(db, "Products")



  useEffect(() =>{

    setLoading(true)

    getDocs(collectionRef).then(querySnapshot => {
      const products = querySnapshot.docs.map(doc => {
        console.log(doc);
        return{ id: doc.id, ...doc.data()}
      })
      console.log(products);
      setProducts(products)
    }).finally(() => {
      setLoading(false);
    })

/*    getProducts().then(item =>{
      if(id){ 
        setProducts(item.filter(p => p.category === id))
      }else{
        setProducts(item)
      }
       
    }).catch(err  => {
      console.log(err)
    }).finally(() => {
      setLoading(false)
    })*/
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




