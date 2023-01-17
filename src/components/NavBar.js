import './NavBar.css';
import {BsCart4} from "react-icons/bs";
import CartWidget from './CartWidget/CartWidget';
import { NavLink } from 'react-router-dom'
import { useContext } from 'react';
import CartContext from '../context/CartContext';

const NavBar = () => {
  const { getQuantity } = useContext(CartContext)
  const { cart } = useContext(CartContext)
return(
      <>
      <div className="topnav" id="myTopnav">
      <CartWidget />
        <NavLink to={'/'}>Inicio</NavLink>
        <a>Contacto</a>
        <div className="dropdown">
          <button className="dropbtn">Prendas
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <NavLink to={'/category/Remeras'}>Remeras</NavLink>
            <NavLink to={'/category/Pantalones'}>Pantalones</NavLink>
            <NavLink to={'/category/Calzado'}>Calzado</NavLink>
            <NavLink to={'/'}>Ofertas</NavLink>

          </div>
        </div>
        <a href="#">Sobre Nosotros</a>
       <NavLink to={' /cart '}>{cart.length > 0 && <BsCart4 />}
       {getQuantity()}
       </NavLink>
      </div>
     
      </>
     ) 
}


export default NavBar;
