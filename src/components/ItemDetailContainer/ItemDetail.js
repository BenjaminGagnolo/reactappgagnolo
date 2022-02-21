import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount';
import { functionOnAdd } from '../Item/Item';




const ItemDetail = ( Products ) => {
    return (
       
         <div className="Ofertas" key={Products.id}>
         <h3 id="nombre_img" >{Products?.producto}</h3>
         <img  src={Products?.img} alt="Products"></img>
         <p>{Products?.Price}</p>
        <ItemCount stock={5} initial={0} onAdd={functionOnAdd} />
        </div>
    )
}

export default ItemDetail;
/*<article className="CardItem">
<header className="Header">
    <h2 className="ItemHeader">
        {Products?.producto}
    </h2>
</header>
<picture>
    <img src={Products?.img} alt={Products?.producto} className="ItemImg"/>
</picture>
<section>
    <p className="Info">
        Categoria: {Products?.producto}
    </p>
    <p className="Info">
        Descripción: {Products?.description}
    </p>
    <p className="Info">
        Precio: {Products?.price}
    </p>
</section>           
<footer className='ItemFooter'>
    
</footer>
</article>*/