import './NavBar.css';
import {BsCart4} from "react-icons/bs";
import CartWidget from './CartWidget/CartWidget';
import { NavLink } from 'react-router-dom'
//import { useEffect, useState } from 'react';
//import { getCategories } from './Products/Products';

const NavBar = () => {
/*const [categories, setCategories] = useState([])

    useEffect(() => {
      getCategories().then(categories => {
          setCategories(categories)
      })
    }, [])*/

return(
      <>
      <div className="topnav" id="myTopnav">
      <CartWidget />
        <a href="http://localhost:3000/" className="active">Inicio</a>
        <a href="#">Ofertas</a>
        <a href="#">Contacto</a>
        <div className="dropdown">
          <button className="dropbtn">Prendas
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <NavLink to={'/category/Remeras'}><a href="#">Remeras</a></NavLink>
            <NavLink to={'/category/Pantalones'}><a href="#">Pantalones</a></NavLink>
            <NavLink to={'/category/Calzado'}><a href="#">Calzado</a></NavLink>
            <a href="#">Ofertas</a>
          </div>
        </div>
        <a href="#">Sobre Nosotros</a>
        <a href="#" id='carrito '><BsCart4 /></a>
      </div>
    
     
      
      </>
     ) 
}


export default NavBar;


/*<div className="Categories">
{categories.map(cat => <NavLink key={cat.id} to={`/category/${cat.id}`} className={({ isActive }) =>
    isActive ? 'ActiveOption' : 'Option'
  }>{cat.description}</NavLink>)}
</div>*/