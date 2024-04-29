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
// import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

          {/* ---------- AUTH ROUTES ---------- */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset" element={<ResetPass />} />
          <Route path="/forget" element={<ForgetPass />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
