import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Blog from "./pages/Blog";
import Products from "./pages/Products";
import CategoryPage from "./pages/CategoryPage";
import ProductDescription from "./pages/ProductDescription";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import Contact from "./pages/Contact";
import OrderSummary from "./pages/OrderSummary";
import ProductDetails from "./components/ProductDetails";
import AddAdress from "./components/AddAdress";
import PaymentOptions from "./components/PaymentOptions";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* products flow */}
        <Route path="/products" element={<Products />} />
        <Route path="/products/:category" element={<CategoryPage />} />
        <Route path="/product/:id" element={<ProductDescription />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/add-address" element={<AddAdress />} />
        <Route path="/payment-options" element={<PaymentOptions />} />
        <Route path="/order-summary" element={<OrderSummary />} />
        <Route path="/OrderSummary" element={<OrderSummary />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
