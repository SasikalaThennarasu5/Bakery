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

// nested payment flow components
import ProductDetails from "./components/ProductDetails";
import AddAdress from "./components/AddAdress";
import PaymentOptions from "./components/PaymentOptions";
import Summary from "./components/Summary";

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

        {/* payment flow with nested routes */}
        <Route path="/payment/:id" element={<Payment />}>
          <Route path="product-details" element={<ProductDetails />} />
          <Route path="add-address" element={<AddAdress />} />
          <Route path="payment-options" element={<PaymentOptions />} />
          <Route path="summary" element={<Summary />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />

        {/* keep only one OrderSummary route if needed */}
        <Route path="/order-summary" element={<OrderSummary />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
