// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../features/cartSlice";
import GeneralHeader from "../components/GeneralHeader";
import { MdOutlineClear } from "react-icons/md";
import { Link } from "react-router-dom";

function Cart() {
  const dispatch = useDispatch();
  // const reduxCartItems = useSelector((state) => state.cart.items);
  // const cartItemCount = useSelector((state) => state.cart.itemCount);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Load cart items from localStorage
    const savedCartItems = JSON.parse(localStorage.getItem("cart")) || [];

    // Initialize quantity if it's not present
    const initializedCartItems = savedCartItems.map((item) => ({
      ...item,
      quantity: item.quantity || 1,
    }));

    // Update local state with saved items
    setCartItems(initializedCartItems);
  }, []);

  const handleRemoveFromCart = (item) => {
    const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    dispatch(removeFromCart(item.id));
  };

  const handleQuantityChange = (item, quantity) => {
    const updatedCart = cartItems.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: parseInt(quantity, 10) || 1 }
        : cartItem
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div>
      <div className="mb-[10rem]">
        <GeneralHeader />
      </div>
      <div className="px-[10px] lg:px-[100px] flex flex-col gap-10 mb-10">
        <div className=" ">
          <nav>
            <ul className="flex gap-[10px] font-Poppins text-[14px] leading-[20px] font-[400]">
              <Link to={"/"}>
                <a href="#">Home</a>
              </Link>
              <p>/</p>
              <li>
                <a href="#">Cart</a>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          {cartItems.length > 0 ? (
            <table className="table-auto w-full border-separate border-spacing-y-4">
              <thead>
                <tr>
                  <th className="px-4 font-Poppins font-[400] text-[16px] leading-6 py-6 text-left">
                    Product
                  </th>
                  <th className="px-4 font-Poppins font-[400] text-[16px] leading-6 py-6 text-left">
                    Price
                  </th>
                  <th className="px-4 font-Poppins font-[400] text-[16px] leading-6 py-6 text-left">
                    Quantity
                  </th>
                  <th className="px-4 font-Poppins font-[400] text-[16px] leading-6 py-6 text-left">
                    Subtotal
                  </th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="bg-white shadow-md rounded-md">
                    <td className="px-4 font-Poppins font-[400] text-[16px] leading-6 py-4">
                      <div className="flex items-center">
                        <div className="relative flex">
                          <div
                            onClick={() => handleRemoveFromCart(item)}
                            className="absolute cursor-pointer rounded-full bg-[#DB4444] flex items-center p-1 text-white">
                            <MdOutlineClear />
                          </div>
                          <img
                            src={item.img}
                            alt={item.name}
                            className="w-[50px] h-[50px] mr-4"
                          />
                        </div>
                        <span className="hidden lg:block">{item.name}</span>
                      </div>
                    </td>
                    <td className="px-4 font-Poppins font-[400] text-[16px] leading-6 py-4">
                      ${item.price}
                    </td>
                    <td className="px-4 font-Poppins font-[400] text-[16px] leading-6 py-4">
                      <input
                        type="number"
                        value={item.quantity}
                        min="1"
                        onChange={(e) =>
                          handleQuantityChange(item, e.target.value)
                        }
                        className="border border-gray-300 px-3 outline-none rounded w-[60px]"
                      />
                    </td>
                    <td className="px-4 font-Poppins font-[400] text-[16px] leading-6 py-4">
                      ${(item.price * item.quantity).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
        {cartItems.length > 0 && (
          <div className="flex justify-between">
            <Link to={"/"}>
              <button className="border font-[500] font-Poppins text-[16px] leading-6 border-slate-600 p-4 rounded-[4px]">
                Return to Shop
              </button>
            </Link>
            <button className="border font-[500] font-Poppins text-[16px] leading-6 border-slate-600 p-4 rounded-[4px]">
              Update Cart
            </button>
          </div>
        )}
        {cartItems.length > 0 && (
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="flex flex-col lg:flex-row gap-3 justify-start lg:justify-center lg:items-center">
              <input
                type="text"
                placeholder="Add Coupon code"
                className="p-4 outline-none border  border-[#000000] rounded-[4px]"
              />
              <button className="bg-[#DB4444] font-[500] font-Poppins text-[16px] leading-6 text-white p-4 rounded-[4px]">
                Apply Coupon
              </button>
            </div>
            <div className="flex mt-10 rounded-[4px] lg:w-[470px] border border-slate-900 p-6 gap-6 flex-col">
              <h1 className="font-[500] text-[20px]">Cart Total</h1>
              <p className="flex items-center justify-between border-b border-black pb-4">
                Subtotal:{" "}
                <span>
                  $
                  {cartItems
                    .reduce((acc, item) => acc + item.price * item.quantity, 0)
                    .toFixed(2)}
                </span>
              </p>
              <p className="flex items-center justify-between border-b border-black pb-4">
                Free:
                <span>Free</span>
              </p>
              <p className="flex items-center justify-between border-b border-black pb-4">
                Total:{" "}
                <span>
                  $
                  {cartItems
                    .reduce((acc, item) => acc + item.price * item.quantity, 0)
                    .toFixed(2)}
                </span>
              </p>
              <button className="bg-[#DB4444] font-[500] self-center font-Poppins text-[16px] leading-6 text-white p-4 rounded-[4px]">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
