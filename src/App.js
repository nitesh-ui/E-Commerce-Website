import './App.css';
import { commerce } from './lib/commerce';
import Header from "./components/Header";
import Products from "./components/Products";
import Cart from './components/Cart';
import { useEffect, useState } from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

const App = () => {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const {data} = await commerce.products.list();
    setProducts(data);
  }

  const fetchCart= async () => {
    const cartValue = await commerce.cart.retrieve();
    setCart(cartValue);
  }

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item);
  }

  const handleUpdateCartQty = async (productId, quantity) => {
    const cartQty = await commerce.cart.update(productId, {quantity});
    setCart(cartQty);
  }

  const handleRemoveFromCart = async (productId) => {
    const removeItem = await commerce.cart.remove(productId);
    setCart(removeItem);
  }

  const handleEmptyCart = async (productId) => {
    const emptyCart = await commerce.cart.empty();
    setCart(emptyCart);
  }

  useEffect(() => {
    fetchProducts();
    fetchCart();
  },[]);

  console.log(cart);

  return (
    <>
      <Router>
        <Header totalItem={cart.total_items}/>
        <Routes>
          <Route exact path="/" element={<Products products={products} onAddToCart={handleAddToCart} />} />
          <Route exact path="/products" element={<Products products={products} onAddToCart={handleAddToCart} />} />
          <Route exact path="/cart" element={<Cart cart={cart} onUpdateQty={handleUpdateCartQty} onRemoveItem={handleRemoveFromCart} onEmptyCart={handleEmptyCart}/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;