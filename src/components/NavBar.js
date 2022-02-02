import './NavBar.css'
import {BsCart4} from "react-icons/bs"
import {GiMuscleUp} from "react-icons/gi"
function NavBar() {
return(
  <><div class="topnav" id="myTopnav">
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
      </div>
    </div>
    <a href="#">Sobre Nosotros</a>
    <a href="#" id='carrito '><BsCart4 /></a>


  </div><h1 className='Titulo'>SportShop  < GiMuscleUp /></h1></>

      ) 
}
export default NavBar;