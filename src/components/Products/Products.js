import Remeras2 from "./Remeras2.png"; 
import Pantalones from "./Pantalones.png";
import Zapas from "./Zapas.png";


export const Products = [
    {id :1, producto: "Remeras", img: Remeras2,category:"Remeras", price: "200", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, doloribus.", stock: 5},
    {id :2, producto: "Pantalones", img: Pantalones,category:"Pantalones", price: "400", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, doloribus." , stock: 5},
    {id :3, producto: "Calzado", img: Zapas,category:"Calzado", price:"500", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, doloribus.", stock: 5}
 ]



export const categories = [
    {id: 'remeras', description: 'remeras'},
    {id: 'pantalones', description: 'pantalones'},
    {id: 'calzado', description: 'calzado'}
]

export const getProducts = (idCategory) => {
    return new Promise ((resolve) => {
        const productsToResolve = idCategory ? Products.filter(item => item.category === idCategory) : Products
        setTimeout(() => {
            resolve(productsToResolve);
        },2000);
    });
}

export const getProduct = (id) => {
    return new Promise((resolve) => {
        const prod = Products.find(pr => pr.id === parseInt(id))
        setTimeout(() => {
            resolve(prod)
        }, 1000)
    })
}

export const getCategories = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(categories)
        }, 1000)
    })
}