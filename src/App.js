import './App.css';
import "./components/ItemListContainer/ItemListContainer.css";
import NavBar from './components/NavBar';
import ItemListContainerF from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetalContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContextProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';
import React from 'react';

function App() {

  return (
    <div className="App">
      <CartContextProvider>
          <BrowserRouter>
              <NavBar />
              <Routes>
                <Route exact path='/' element={<div><h1>Ofertas</h1>
                <div><ItemListContainerF /></div></div>}/>
                <Route exact path='/about'/>
                <Route path='/category/:id' element={<ItemListContainerF />}/>
                <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
                <Route path='/cart' element={<Cart />}/>
              </Routes>
          </BrowserRouter>
      </CartContextProvider>
          
          
    </div>
 
  );
}
export default App;


/*<form onSubmit={FuncionSubmit}>
            <br></br>
                  <input type="text"></input>
                  <button type='submit'>SBM</button>
          </form>*/


