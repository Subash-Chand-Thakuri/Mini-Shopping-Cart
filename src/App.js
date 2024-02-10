import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import { Products } from "./features/products/Products";
import { Cart } from "./features/cart/Cart";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsync } from "./features/cart/cartSlice";

function App() {
  const [showCart, setShowCart] = useState(false);
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const products = useSelector((state) => state.product.products);

  useEffect(()=>{
    dispatch(fetchAsync())
  },[])

  return (
    <div className="App">
      <button onClick={() => setShowCart(!showCart)}>
        {showCart ? <p> Products [{products.length}]</p>: <p>Cart [ {items.length} ]</p>}
      </button>
      {showCart ? <Cart></Cart> : <Products></Products>}
    </div>
  );
}

export default App;
