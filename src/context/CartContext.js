import { createContext, useState } from "react"

const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])


    const addItem = (item, count) => {



const productToAdd = {
        ...item,
        count
    }
    isInCart(item.id) ? updateItemInCart(productToAdd) : addItemToCart(productToAdd)
 
 };
 const isInCart = (id) => {
    return cart.some(prod => prod.id === id)
}

    const updateItemInCart = (productToAdd) => {
        const updatedCart = cart.map(prod => {
            if(prod.id === productToAdd.id) {
                const updatedProduct = {
                    ...prod,
                    count: prod.cantidad + productToAdd.cantidad
                }
                return updatedProduct
            } else {
                return prod
            }
        })

        setCart(updatedCart)
    }
    const addItemToCart = (productToAdd) => {
        setCart([...cart, productToAdd])
    }

    const removeItem = (id) => {
    
        const newList = cart.filter(item => item.id !== id);
        setCart (newList);
    }


    const clearCart = () =>{
        setCart ([]);   
    }

    const getTotal = () => {
        let total = 0
        cart.forEach(prod => {
            total = total + prod.price * prod.count
        })
        return total
    }


    const getQuantity = () => {
        let cnt = 0
        cart.forEach(prod => {
            cnt = cnt + prod.count
        })
        return cnt
    }

    return (
        <CartContext.Provider value={{
            cart,
            addItem,
            removeItem,
            getQuantity,
            getTotal,
            clearCart
            }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;

/*      if (index >= 0) {
        
           
            cart[index].count = cart[index].count + count;


           
            cart[index].total = cart[index].count * cart[index].price;


           
            setCart ([...cart]);
         } else setCart([...cart,{id:productToAdd.id,price: +productToAdd.price, producto: productToAdd.producto,
            img: productToAdd.img, cantidad: count, total: count * productToAdd.price  }])
       
         */