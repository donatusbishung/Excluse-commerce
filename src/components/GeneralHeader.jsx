import { useEffect, useState, useRef } from "react";
import { IoCartOutline } from "react-icons/io5";
import { CiSearch, CiHeart, CiLogout, CiStar, CiGift } from "react-icons/ci";
import { PiUserLight } from "react-icons/pi";
import { MdOutlineClear } from "react-icons/md";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { TiDeleteOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import { navLinks } from "../Utils/Navigation";
import TopHeader from "./TopHeader";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { addToWishlist } from "../features/wishlistSlice";

function GeneralHeader() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const wishlist = useSelector((state) => state.wishlist);

  // Other state
  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const [localCarts, setLocalCarts] = useState(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart"));
    return cartItems ? cartItems : [];
  });

  const cartInitialized = useRef(false);
  const wishlistInitialized = useRef(false);

  useEffect(() => {
    if (!cartInitialized.current) {
      const cartxx = JSON.parse(localStorage.getItem("cart"));
      if (cartxx?.length > 0 && cart?.items?.length < 1) {
        cartxx.forEach((item) => dispatch(addToCart(item)));
        setLocalCarts(cartxx);
      } else {
        setLocalCarts(cart?.items);
      }
      cartInitialized.current = true;
    }
  }, [cart, dispatch]);

  useEffect(() => {
    setLocalCarts(cart.items);
  }, [cart.items]);

  // for wish list items
  useEffect(() => {
    if (!wishlistInitialized.current) {
      const wishlistItems = JSON.parse(localStorage.getItem("wishlist"));
      if (wishlistItems) {
        wishlistItems.forEach((item) => {
          if (
            !wishlist.items.some((wishlistItem) => wishlistItem.id === item.id)
          ) {
            dispatch(addToWishlist(item));
          }
        });
      }
      wishlistInitialized.current = true;
    }
  }, [dispatch, wishlist.items]);

  const handleUserClick = () => {
    setUserMenuOpen((prevState) => !prevState);
  };

  return (
    <div className="bg-white border-b border-gray-200 fixed top-0 w-full z-50">
      <TopHeader />
      <div className="px-[10px] flex justify-between items-center py-6 lg:px-[100px] font-Inter bg-white">
        <div className="flex items-center">
          <button
            className="p-2 lg:hidden lg:p-0"
            onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <MdOutlineClear className="w-[32px] h-[32px]" />
            ) : (
              <HiOutlineMenuAlt3 className="w-[32px] h-[32px]" />
            )}
          </button>
          <h1 className="text-[#000000] font-[700] text-[24px] leading-6">
            Exclusive
          </h1>
        </div>
        <ul
          className={`list-none hidden lg:inline-flex items-center ${
            menuOpen ? "block" : "hidden"
          } lg:flex`}>
          {navLinks.map((links, i) => (
            <li
              key={i}
              className="lg:pr-16 cursor-pointer text-[16px] leading-6 font-[400] p-4 lg:p-0">
              <Link to={links.href}>{links.title}</Link>
            </li>
          ))}
        </ul>
        <div className="flex justify-center items-center gap-3 relative">
          <div className="bg-[#F5F5F5] p-2 rounded-sm hidden lg:flex">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="font-[400] bg-[#F5F5F5] outline-none hidden lg:flex text-[12px] leading-4 opacity-[50%]"
            />
            <CiSearch className="font-bold hidden lg:block w-[24px] h-[24px]" />
          </div>
          <Link to={"/wishlist"}>
            <div className="relative">
              <div className="absolute -top-[0.3rem] left-[0.7rem] bg-[#DB4444] rounded-full w-[16px] h-[17px] p-1">
                <span className="text-[12px] text-[#FAFAFA] font-[400] font-Poppins leading-[18px] absolute -top-[0.1rem] left-[0.2rem]">
                  {wishlist.itemCount}
                </span>
              </div>
              <CiHeart className="w-[24px] h-[24px] cursor-pointer" />
            </div>
          </Link>
          <Link to={"/cart"}>
            <div className="relative">
              <div className="absolute -top-[0.3rem] left-[0.7rem] bg-[#DB4444] rounded-full w-[16px] h-[17px] p-1">
                <span className="text-[12px] text-[#FAFAFA] font-[400] font-Poppins leading-[18px] absolute -top-[0.1rem] left-[0.25rem]">
                  {localCarts.length}
                </span>
              </div>
              <IoCartOutline className="w-[24px] h-[24px] cursor-pointer" />
            </div>
          </Link>
          <div
            className={`relative rounded-full p-2 ${
              userMenuOpen ? "bg-[#DB4444] text-white" : ""
            }`}
            onClick={handleUserClick}>
            <PiUserLight className="w-[24px] h-[24px] cursor-pointer" />
            {userMenuOpen && (
              <div className="absolute -right-2 mt-3 lg:right-0 w-[225px] h-[208px] bg-[#000000] opacity-[80%] rounded-[4px] shadow-lg z-10">
                <ul className="list-none flex flex-col text-[14px] font-Poppins font-[400]">
                  <li className="cursor-pointer flex items-center gap-3 leading-6 text-white font-[400] py-2 px-4 hover:bg-gray-400 hover:text-black">
                    <span>
                      <PiUserLight />
                    </span>
                    <Link to="/account">Manage My Account</Link>
                  </li>
                  <li className="cursor-pointer flex items-center gap-3 leading-6 text-white font-[400] py-2 px-4 hover:bg-gray-400 hover:text-black">
                    <span>
                      <CiGift />
                    </span>
                    My Order
                  </li>
                  <li className="cursor-pointer flex items-center gap-3 leading-6 text-white font-[400] py-2 px-4 hover:bg-gray-400 hover:text-black">
                    <span>
                      <TiDeleteOutline />
                    </span>
                    My Cancellations
                  </li>
                  <li className="cursor-pointer flex items-center gap-3 leading-6 text-white font-[400] py-2 px-4 hover:bg-gray-400 hover:text-black">
                    <span>
                      <CiStar />
                    </span>
                    My Reviews
                  </li>
                  <li className="cursor-pointer flex items-center gap-3 leading-6 text-white font-[400] py-2 px-4 hover:bg-gray-400 hover:text-black">
                    <span>
                      <CiLogout />
                    </span>
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className="lg:hidden">
          <ul className="list-none flex flex-col items-start">
            {navLinks.map((links, i) => (
              <li
                key={i}
                className="lg:pr-16 cursor-pointer text-[16px] leading-6 font-[400] p-4 mb-2 lg:p-0">
                <Link to={links.href}>{links.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default GeneralHeader;
