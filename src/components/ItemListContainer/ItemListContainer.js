import Remeras2 from "./Remeras2.png"; 
import Pantalones from "./Pantalones.png";
import Zapas from "./Zapas.png";
import './ItemListContainer.css';
import ItemCount from "../ItemCount/ItemCount";

const functionOnAdd = (count) => {
  console.log(`Se agregaron ${count} productos al carrito`)
}

const ItemListContainer = [
   {id :1, producto: "Remeras", img: Remeras2},
   {id :2, producto: "Pantalones", img: Pantalones},
   {id :3, producto: "Calzado", img: Zapas}
]


function ItemListContainerF(){
  return(
    ItemListContainer.map(e => { 
       return(
         <div className="Ofertas" key={e.id}>
              <h3 id="nombre_img" >{e.producto}</h3>
              <img  src={e.img}></img>
             <ItemCount stock={5} initial={0} onAdd={functionOnAdd} />
        </div> 
        )
  }    
  )
  )
  }
   
export default ItemListContainerF;


