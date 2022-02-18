import Item from "../Item/Item";


function ItemList({items}){

  return(
   
     
     items.map(producto => { 

        return(
            <Item props={producto}/>
         )
   }    
   )
  )
  }

  export default ItemList;