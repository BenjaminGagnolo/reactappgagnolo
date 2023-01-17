//import { useState, useEffect } from 'react'
import "./ItemCount.css";


function ItemCount ({  stock = 5, initial = 1, onAdd, increment, decrement, count} ) {
/*const [count, setCount] = useState(initial)


  const decrement = () => {
    if(count > 0) {
        setCount(count - 1)

    }
}

const increment = () => {
    if (count < stock){
    setCount(count + 1)  
    }
    if (count === 15){
    setCount(count - stock)
    }
    
}*/


return(
       <>
            <div className='ItemCount'>
            <h3>{count}</h3>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button><br></br>
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
            </div>
            
        </>
)
}
export default ItemCount;