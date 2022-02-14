

 const products = /*= () => {
    return(*/ [
        {id :1, producto: "Remeras", tipo: "deportiva"},
        {id :2, producto: "Pantalones", tipo: "deportiva"},
        {id :3, producto: "Calzado", tipo: "deportiva"}
     ]/*) 
 }*/

 const getProducts = () =>{

    return new Promise((resolve) =>{
        setTimeout(() =>{
        resolve(products)
        },5000)
    }
    )}



    export default products;
    export  {getProducts};
    