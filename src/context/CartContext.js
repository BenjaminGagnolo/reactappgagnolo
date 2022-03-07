import { createContext, useState } from "react"

const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])


    const addItem = (productToAdd, count) => {
    let index = isInCart(productToAdd.id);

        if (index >= 0) {
        
           
            cart[index].count = cart[index].count + count;


           
            cart[index].total = cart[index].count * cart[index].price;


           
            setCart ([...cart]);
         } else setCart([...cart,{id:productToAdd.id,price: +productToAdd.price, producto: productToAdd.producto,
            img: productToAdd.img, cantidad: count, total: count * productToAdd.price  }])
       
    };
    console.log(cart);

    const removeItem = (id) => {
    
        const newList = cart.filter(item => item.id !== id);
        setCart (newList);
    }
    const isInCart = (id) => cart.findIndex( item => item.id === id);

    const clearCart = () =>{
        setCart ([]);   
    }
    const getQuantity = () => {
        let cnt = 0
        cart.forEach(prod => {
            cnt = cnt + prod.cantidad
        })
        return cnt
    }
    return (
        <CartContext.Provider value={{
            cart,
            addItem,
            removeItem,
            getQuantity,
            clearCart
            }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;

