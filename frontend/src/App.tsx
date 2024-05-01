import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home/HomePage";
import Header from "./components/header/Header";
import ResetPass from "./auth/ResetPass";
import ForgetPass from "./auth/ForgetPass";
import Signup from "./auth/Signup";
import Login from "./auth/Login";
import NotFound from "./components/NotFound";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Products from "./pages/products/Products";
import Cart from "./pages/cart/Cart";
import Checkout from "./pages/checkout/Checkout";
// import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<HomePage />} />

          {/* ---------- MAIN ROUTES ---------- */}
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />

          {/* ---------- AUTH ROUTES ---------- */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset" element={<ResetPass />} />
          <Route path="/forget" element={<ForgetPass />} />

          {/* ---------- OTHER ROUTES ---------- */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
