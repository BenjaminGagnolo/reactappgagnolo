import ItemCount from "../ItemCount/ItemCount"
//import './ItemListContainer/ItemListContainer.css';

const functionOnAdd = (count) => {
    console.log(`Se agregaron ${count} productos al carrito`)
  }
function Item({props}){

  return(
   
       <div className="Ofertas" key={props.id}>
           <h3 id="nombre_img" >{props.producto}</h3>
           <img  src={props.img} alt="Products"></img>
          <ItemCount stock={5} initial={0} onAdd={functionOnAdd} />
     </div>      
   )

  }

export default Item;