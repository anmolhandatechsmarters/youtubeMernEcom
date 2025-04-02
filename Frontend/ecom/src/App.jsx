import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navigation from "./Customer/Components/Navbar/Navigation";
import HomePage from "./Customer/Pages/HomePage/HomePage";
import Product from "./Customer/Components/Product/Product";
import Footer from "./Customer/Components/Footer/Footer";
import ProductsDetails from "./Customer/Components/ProductDetails/ProductDetails";
import Cart from "./Customer/Components/Cart/Cart";
import Checkout from "./Customer/Components/Checkout/Checkout";
import Order from "./Customer/Components/Order/Order";
import OrderDetail from "./Customer/Components/Order/OrderDetail";
import Login from "./Customer/My/LoginSignup";

function App() {
  const navigate = useNavigate();
  const [showLayout, setShowLayout] = useState(true);

  useEffect(() => {
    // Listen for URL changes to update layout visibility
    const currentPath = window.location.pathname;
    if (currentPath === "/login" || currentPath === "/register") {
      setShowLayout(false);
    } else {
      setShowLayout(true);
    }
  }, [navigate]);

  return (
    <div>
      {showLayout && <Navigation />} {/* Show Nav only if not on login/register */}

      <Routes>
        {/* Authentication Routes */}
        <Route path="/login" element={<Login isSignUp={false} />} />
        <Route path="/register" element={<Login isSignUp={true} />} />

        {/* Main Application Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/products-details" element={<ProductsDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order" element={<Order />} />
        <Route path="/order-detail" element={<OrderDetail />} />
      </Routes>

      {showLayout && <Footer />} {/* Show Footer only if not on login/register */}
    </div>
  );
}

export default App;
