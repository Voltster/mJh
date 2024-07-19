import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import { lazy, Suspense } from "react";
const Home = lazy(() => import("./Pages/Home"));
const AboutUs = lazy(() => import("./Pages/About"));
const Products = lazy(() => import("./Pages/Product"));

import AOS from 'aos';
import 'aos/dist/aos.css';

import "./Reset.css";
import "./App.css";

function App() {
  AOS.init();
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="bg-gray-50 h-screen relative">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </div>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
