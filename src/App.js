import "./App.css";
// import components
import Navbar from "./Components/Navbar";
import Home from "./Components/Home"
import Products from "./Components/Products"
import Product from "./Components/Product";
// import react router
import './style/main.css'
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { GiShoppingBag } from "react-icons/gi";
import Cart from "./Components/Cart";




function App() {
  const [cartsVisibilty, setCartVisible] = useState(false);
  const [productsInCart, setProducts] = useState(
    JSON.parse(localStorage.getItem("shopping-cart")) || []
  );
  useEffect(() => {
    localStorage.setItem("shopping-cart", JSON.stringify(productsInCart));
  }, [productsInCart]);
  const addProductToCart = (product) => {
    const newProduct = {
      ...product,
      count: 1,
    };
    setProducts([...productsInCart, newProduct]);
  };

  const onQuantityChange = (productId, count) => {
    setProducts((oldState) => {
      const productsIndex = oldState.findIndex((item) => item.id === productId);
      if (productsIndex !== -1) {
        oldState[productsIndex].count = count;
      }
      return [...oldState];
    });
  };

  const onProductRemove = (product) => {
    setProducts((oldState) => {
      const productsIndex = oldState.findIndex(
        (item) => item.id === product.id
      );
      if (productsIndex !== -1) {
        oldState.splice(productsIndex, 1);
      }
      return [...oldState];
    });
  };


  return (
    <>
      <div className="App">
        <Cart
          visibilty={cartsVisibilty}
          products={productsInCart}
          onClose={() => setCartVisible(false)}
          onQuantityChange={onQuantityChange}
          onProductRemove={onProductRemove}
        />
        <Navbar
          setCartVisible={setCartVisible}
          productsInCart={productsInCart}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route
            path="/products/:id"
            element={<Product addProductToCart={addProductToCart} />}
          />
        </Routes>
        
      </div>

      
    </>
  );
}

export default App;
