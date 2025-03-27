import { useState } from "react";
import "./App.css";
import Navigation from "./Customer/Components/Navbar/Navigation";
import HomePage from "./Customer/Pages/HomePage/HomePage";
import Product from "./Customer/Components/Product/Product";
import Footer from "./Customer/Components/Footer/Footer";
import ProductsDetails from "./Customer/Components/ProductDetails/ProductDetails";
import Cart from "./Customer/Components/Cart/Cart";
import Checkout from "./Customer/Components/Checkout/Checkout";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Order from "./Customer/Components/Order/Order";
import OrderDetail from "./Customer/Components/Order/OrderDetail";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="">
        <Navigation style={{zIndex:"99px"}}/>
        <div>
          {/* <HomePage/> */}
          {/* <Product/> */}
        {/* <ProductsDetails/> */}
        {/* <Cart/> */}
        {/* <Router>
      <Routes>
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router> */}
   {/* <Order/> */}


<OrderDetail/>
        </div>

        <Footer/>
      </div>
    </>
  );
}

export default App;
