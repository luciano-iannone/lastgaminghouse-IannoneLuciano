import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'
import { CartProvider } from './components/Context/CartContext'
import Checkout from './components/checkout/checkout'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
        <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={'All our products'}/>} />
            <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Products by category'}/>}/>
            <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
            <Route path='/Cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />}/>
            <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
