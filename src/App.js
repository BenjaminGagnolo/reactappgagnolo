import './App.css';
import NavBar from './components/NavBar';
import ItemListContainerF from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetalContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
          <BrowserRouter>
              <NavBar />
              <Routes>
                <Route path='/' element={<div><h1>Ofertas</h1>
                <div><ItemListContainerF /></div></div>}/>
                <Route path='/about' element={<h1>About</h1>} />
                <Route path='/category/:categoryId' element={<ItemListContainerF />}/>
                <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
              </Routes>
          </BrowserRouter>
    </div>
  /*  <div className="App">
      <NavBar />
    <div><h1><center>Ofertas</center></h1></div>
      <ItemListContainerF />
     
    </div>*/  
  );
}


export default App;
//<ItemDetailContainer />




