import './NavBar.css';
import {BsCart4} from "react-icons/bs";
import CartWidget from './CartWidget/CartWidget';
import { NavLink } from 'react-router-dom'
import { useContext } from 'react';
import CartContext from '../context/CartContext';

const NavBar = () => {
  const { getQuantity } = useContext(CartContext)
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
            <NavLink to={'/category/Remeras'}><a>Remeras</a></NavLink>
            <NavLink to={'/category/Pantalones'}><a>Pantalones</a></NavLink>
            <NavLink to={'/category/Calzado'}><a>Calzado</a></NavLink>
            <NavLink to={'/'}><a>Ofertas</a></NavLink>

          </div>
        </div>
        <a href="#">Sobre Nosotros</a>
       <NavLink to={' /cart '}><BsCart4 />
       {getQuantity()}
       </NavLink>
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