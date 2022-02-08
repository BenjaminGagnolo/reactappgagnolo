import './NavBar.css';
import {BsCart4} from "react-icons/bs";
import CartWidget from './CartWidget/CartWidget';

import button from './button/button'





function NavBar() {
  return(
      <>
      <div className="topnav" id="myTopnav">
        <a href="#" className="active">Inicio</a>
        <a href="#">Ofertas</a>
        <a href="#">Contacto</a>
        <div className="dropdown">
          <button className="dropbtn">Prendas
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <a href="#">Remeras</a>
            <a href="#">Pantalones</a>
            <a href="#">Calzado</a>
            <a href="#">Ofertas</a>
          </div>
        </div>
        <a href="#">Sobre Nosotros</a>
        <a href="#" id='carrito '><BsCart4 /></a>
      </div>
      <CartWidget />
      
      </>
      ) 
}
export default NavBar;