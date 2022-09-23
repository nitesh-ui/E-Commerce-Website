import './App.css';
import { commerce } from './lib/commerce';
import Header from "./components/Header";
import Products from "./components/Products";
import Cart from './components/Cart';
import { useEffect, useState } from 'react';

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

  useEffect(() => {
    fetchProducts();
    fetchCart();
  },[]);

  console.log(cart);

  return (
    <div className="App">
      <Header totalItem={cart.total_items}/>
      <Products products={products} onAddToCart={handleAddToCart} />
      <Cart cart={cart}/>
    </div>
  );
}

export default App;
