import Remeras2 from "./Remeras2.png"; 
import Pantalones from "./Pantalones.png";
import Zapas from "./Zapas.png";



export const Products = [
    {id :1, producto: "Remeras", img: Remeras2, category:"Remeras", price: "200", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, doloribus.", stock: 5},
    {id :2, producto: "Pantalones", img: Pantalones, category:"Pantalones", price: "400", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, doloribus." , stock: 5},
    {id :3, producto: "Calzado", img: Zapas, category:"Calzado", price:"500", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, doloribus.", stock: 5}
 ]





export const getProducts = (idCategory) => {
    const promise = new Promise ((resolve) => {
       
        setTimeout(() => {
            if (idCategory) {
            resolve(Products.filter(p => p.category === idCategory))
            }
            else{
            resolve(Products); 
            }
            
        },2000);
    });
    return promise;
}

export const getProduct = (id) => {
    return new Promise((resolve) => {
        const prod = Products.find(pr => pr.id === parseInt(id))
        setTimeout(() => {
            resolve(prod)
        }, 1000)
    })
}

