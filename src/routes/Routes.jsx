import { BrowserRouter, Routes, Route } from "react-router-dom";

import EditDetails from "../components/Forms/EditDetails";
// import Account from "../pages/Account";
import Address from "../components/Account-layouts/Address";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Login from "../pages/LogIn";
import About from "../pages/About";
import SignUp from "../pages/SignUp";
import NotFound from "../pages/NotFound";
import Wishlist from "../pages/Wishlist";
import Cart from "../pages/Cart";

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/account" element={<EditDetails />} />
        <Route path="/edit" element={<EditDetails />} />
        <Route path="/address" element={<Address />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;
