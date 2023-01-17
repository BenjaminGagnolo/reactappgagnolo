import { Link } from 'react-router-dom';
import '../ItemListContainer/ItemListContainer.css';

function Item(  {products}  ){
 

  return(
   
       <div className="Ofertas" key={products.id}>
           <h3 id="nombre_img" >{products.producto}</h3>
           <img className='Imagenes'  src={products.img} alt="products"></img>
           <section>
             <p>
               Precio: ${products.price}
             </p>
           </section>
          <footer>
                <Link to={`/detail/${products.id}`}>Ver mas</Link>
                
          </footer>
         
     </div> 

   )

  }

export default Item;
