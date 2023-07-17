import React, { useState } from "react";
import { Routes, Route } from "react-router-dom"
// start import components to routes
import Data from "./data/database";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Services from "./pages/services/Services";
import Contact from "./pages/contact/Contact";
import Error from "./pages/error/Error";
import Shopping from "./components/shopping/Shopping";
import Product from "./pages/categories/Product";
import ProductDetails from "./pages/categories/ProductDetails";
import Categories from "./pages/categories/Categories";
import { createContext } from "react";
import Footer from "./components/footer/Footer";
// end import components to routes
export const productContext = createContext()
function App() {
  const [cartItems, setCartItems] = useState([]);
  function handleAddProduct(product) {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist) {
      setCartItems(cartItems.map((item) => item.id === product.id ? { ...productExist, quantity: productExist.quantity + 1 } : item));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }])
    }
  }
  function removeProduct(product) {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id))
    } else {
      setCartItems(
        cartItems.map((item) => item.id === product.id ? { ...productExist, quantity: productExist.quantity - 1 } : item)
      )
    }
  }
  function handelClearShopping() {
    setCartItems([])
  }
  return (
    <productContext.Provider value={{ handleAddProduct, cartItems }}>
      <main className='app'>
        <Header cartItems={cartItems} />
        {/* <Shopping /> */}
        {/* start create routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/categories" element={<Categories data={Data} />} >
            <Route path="product" element={<Product />} />
          </Route>
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route />
          <Route path="/shopping" element={<Shopping cartItems={cartItems} handleAddProduct={handleAddProduct} removeProduct={removeProduct} handelClearShopping={handelClearShopping} />} />
        </Routes>
        {/* end create routes */}
        <Footer />
      </main>
    </productContext.Provider>
  );
}

export default App;
