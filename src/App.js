import './App.css';
import NavBar from './components/NavBar';
import ItemListContainerF from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetalContainer';

function App() {
  return (
    
    <div className="App">
      <NavBar />
    <div><h1><center>Ofertas</center></h1></div>
      <ItemListContainerF />
      <ItemDetailContainer />
    </div>
  );
}


export default App;
