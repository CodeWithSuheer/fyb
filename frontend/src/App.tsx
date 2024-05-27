import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";
import "./App.css";
import { Toaster } from "react-hot-toast";
const HomePage = React.lazy(() => import( "./pages/home/HomePage")) ;
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
import SelectedItem from "./pages/selectedItem/SelectedItem";
import OtpChecker from "./auth/OtpChecker";
import Terms from "./components/Terms";
import UserProfile from "./pages/user/UserProfile";
import { useEffect } from "react";
import { useAppDispatch } from "./app/hooks";
import { userSessionAsync } from "./features/authSlice";
import {
  getLatestProductsAsync,
} from "./features/productSlice";
import Footer from "./components/footer/Footer";
import MyOrders from "./pages/myOrders/MyOrders";
import Loader from "./components/Loader";
// import Footer from "./components/footer/Footer";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(userSessionAsync());
    dispatch(getLatestProductsAsync());
  });



  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Suspense fallback={<Loader />}><HomePage /></Suspense>} />

          {/* ---------- MAIN ROUTES ---------- */}
          <Route path="/products" element={<Products />} />
          <Route path="/selectedItem/:id" element={<SelectedItem />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orders" element={<MyOrders />} />

          {/* ---------- AUTH ROUTES ---------- */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset/:id/:value" element={<ResetPass />} />
          <Route path="/forget" element={<ForgetPass />} />
          <Route path="/otp/:id" element={<OtpChecker />} />
          <Route path="/profile" element={<UserProfile />} />

          {/* ---------- OTHER ROUTES ---------- */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <Toaster />
    </>
  );
}

export default App;
