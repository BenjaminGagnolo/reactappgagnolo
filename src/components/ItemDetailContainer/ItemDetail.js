import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ( { product } ) => {
    return (
       
         <div className="Ofertas" key={product.id}>
         <h3 id="nombre_img" >{product?.producto}</h3>
         <img  src={product?.img} alt="Products"></img>
         <p>{product?.price}</p>
        <ItemCount stock={product.stock}  />
        </div>
    )
}

export default ItemDetail;
