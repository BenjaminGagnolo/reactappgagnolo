import { Link } from 'react-router-dom';


function Item(  {products}  ){
  //console.log(products);
  const onAdd2 = (e) =>{
    e.stopPropagation()
    console.log("Click");
  }

  return(
   
       <div className="Ofertas" key={products.id}>
           <h3 id="nombre_img" >{products.producto}</h3>
           <img  src={products.img} alt="products"></img>
           <section>
             <p>
               Precio: ${products.price}
             </p>
           </section>
          <footer>
                <Link to={`/detail/${products.id}`}>Ver mas</Link>
                <button onClick={onAdd2}>BtnClick</button>
          </footer>
         
     </div> 

   )

  }

export default Item;
