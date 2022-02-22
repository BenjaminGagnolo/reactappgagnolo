
import { Link } from 'react-router-dom'


function Item( { product } ){

  return(
   
       <div className="Ofertas" key={product.id}>
           <h3 id="nombre_img" >{product.producto}</h3>
           <img  src={product.img} alt="Products"></img>
           <section>
             <p>
               Precio: ${product.price}
             </p>
           </section>
          <footer>
                <Link to={`/detail/${product.id}`}>Ver detalle</Link>
          </footer>
         
     </div> 

   )

  }

export default Item;
