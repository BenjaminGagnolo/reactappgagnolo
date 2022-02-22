
import { Link } from 'react-router-dom';
import { Products } from '../Products/Products';


function Item(  Products  ){

  return(
   
       <div className="Ofertas" key={Products.id}>
           <h3 id="nombre_img" >{Products.producto}</h3>
           <img  src={Products.img} alt="Products"></img>
           <section>
             <p>
               Precio: ${Products.price}
             </p>
           </section>
          <footer>
                <Link to={`/detail/${Products.id}`}>Ver detalle</Link>
          </footer>
         
     </div> 

   )

  }

export default Item;
