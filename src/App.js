import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactGA from "react-ga";
import "./App.css";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage"
import ContactPage from "./pages/ContactPage"
import AppAdsFile from "./pages/AppAdsFile"

function App() {

  useEffect(() => {
    ReactGA.initialize("G-WHH4ERC3P4");
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="products/:id" element={<ProductPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="app-ads.txt" element={<AppAdsFile />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
