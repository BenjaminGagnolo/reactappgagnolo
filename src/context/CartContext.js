import { createContext, useState } from "react"

const Context = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])


    const addItem = (productToAdd, count) => {
    let index = isInCart(productToAdd.id);

        if (index >= 0) {
        
           
            cart[index].count = cart[index].count + count;


           
            cart[index].total = cart[index].count * cart[index].price;


           
            setCart ([...cart]);
         } else setCart([...cart,{id:productToAdd.id,price: +productToAdd.price, producto: productToAdd.producto,
             img: productToAdd.img, total: count * productToAdd.price,  }])
       
    };
    console.log(cart);

    const removeItem = () => setCart ([]);
    const isInCart = (id) => cart.findIndex( item => item.id === id);

    return (
        <Context.Provider value={{
            cart,
            addItem,
            removeItem
            }}>
            {children}
        </Context.Provider>
    )
}

export default Context;

