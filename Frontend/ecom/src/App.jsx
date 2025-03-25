import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navigation from "./Customer/Components/Navbar/Navigation";
import HomePage from "./Customer/Pages/HomePage/HomePage";
import Product from "./Customer/Components/Product/Product";
import Footer from "./Customer/Components/Footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="">
        <Navigation style={{zIndex:"99px"}}/>
        <div>
          {/* <HomePage/> */}
          <Product/>
        </div>

        <Footer/>
      </div>
    </>
  );
}

export default App;
