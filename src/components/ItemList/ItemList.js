import Item from "../Item/Item";



function ItemList( { product = []  } ){

        return(
         <div className="Ofertas">
               
                      {product.map(p => <Item key={p.id} product={product}/>)}
                    
         </div>
             
        
         )
   
  }

  export default ItemList;
