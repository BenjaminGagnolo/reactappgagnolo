import './ItemDetail.css'
import { useState } from 'react';
import Select from "../Select/Select"
import ItemCount from '../ItemCount/ItemCount';

const InputCount = ({onConf, stock, initial=0}) => {
    const [count, setCount] = useState(initial)

    const handleChange = ({target}) => {
        if(target.value <= stock && target.value >= 0) {
            setCount(target.value)
        }
    }

    return (
        <div>
            <input type='number' onChange={handleChange} value={count}/>
            <button onClick={() => onConf(count)}>Agregar al carrito</button>
        </div>
    )
}
const BtnCount = ({ onConf, stock, initial = 0 }) => {
    const [count, setCount] = useState(initial)

    const increment = () => {
        if(count < stock) {
            setCount(count + 1)
        }
    }

    const decrement = () => {
        if(count > initial) {
            setCount(count - 1)
        }
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <button onClick={() => onConf(count)}>Agregar al carrito</button>
        </div>
    )
}




const ItemDetail = ( { id, producto, img, category, price, description, stock, inputType ="button" } ) => {
const [option, setOption] = useState()
const options = [{ value: 1, text: "azul"}, { value:2, text:"rojo"}, {value:3, text:"verde"}]

const selectOpt = (value) =>{
    console.log(value);
    setOption(value)
}
const onConf = () => {
    console.log('agregue al carrito')
}
const Count = inputType === "button" ? BtnCount : InputCount
    return (
       
         <div className="Ofertas" key={id}>
         <h3 id="nombre_img" >{producto}</h3>
         <img  src={img} alt="Products"></img>
         <Select options={options} onSelect={selectOpt} defaultOption={1} />
         <p>{price}</p>
         <footer>
             <Count onConf={onConf} stock={stock} initial={1} />
         </footer>
        <ItemCount stock={stock}  />
        </div>
    )
}

export default ItemDetail;
