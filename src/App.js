import './App.css';
import "./components/ItemListContainer/ItemListContainer.css";
import NavBar from './components/NavBar';
import ItemListContainerF from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetalContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

const FuncionSubmit = (e) => {
    e.preventDefault()
    console.log('submit')
  }


  return (
    <div className="App">
          <BrowserRouter>
              <NavBar />
              <Routes>
                <Route exact path='/' element={<div><h1>Ofertas</h1>
                <div><ItemListContainerF /></div></div>}/>
                <Route exact path='/about'/>
                <Route path='/category/${product.category}' element={<ItemListContainerF />}/>
                <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
              </Routes>
          </BrowserRouter>
          
          <form onSubmit={FuncionSubmit}>
            <br></br>
                  <input type="text"></input>
                  <button type='submit'>SBM</button>
          </form>
    </div>
 
  );
}
export default App;





