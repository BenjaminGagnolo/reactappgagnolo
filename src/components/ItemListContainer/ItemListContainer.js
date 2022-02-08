import Remeras2 from "./Remeras2.png"; 
import Pantalones from "./Pantalones.png";
import Zapas from "./Zapas.png";
import './ItemListContainer.css';

const ItemListContainer = [
   {producto: "Remeras", img: Remeras2},
   {producto: "Pantalones", img: Pantalones},
   {producto: "Calzado", img: Zapas}
]


function ItemListContainerF(){
  return(
    ItemListContainer.map(e => { 
       return(
         <div className="Ofertas">
              <h3 id="nombre_img">{e.producto}</h3>
              <img src={e.img}/>
        </div> 
        )
  }    
  )
  )
  }
   
export default ItemListContainerF;


