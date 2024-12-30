import "./App.css";
import Navbar from "./Components/navbar";
import Footer from "./Components/footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/HomePage";
import OrderPage from "./pages/OrderPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/OrderPage" element={<OrderPage />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
