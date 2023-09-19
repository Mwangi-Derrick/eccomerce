import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import CartEmpty from "./pages/CartEmpty";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";
import Login from "./pages/LoginPage";
import { useStateValue } from "./data/StateProvider";

function App() {
  const [{ basket }] = useStateValue();
  return (
    <div className="App">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0,maximum-scale= 1.0"
      />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
              <ScrollTop/>
              <Footer />
            </>
          }
        />

        <Route
          path="/cart"
          element={
            basket?.length > 0 ? (
              <>
                <Header />
                <Cart />
                <Footer />
              </>
            ) : (
              <>
                <Header />
                <CartEmpty />
                <Footer />
              </>
            )
          }
        />
        <Route path="/Login" element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
