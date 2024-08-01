import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist, addToWishlist } from "../features/wishlistSlice";
import { RiDeleteBin6Line } from "react-icons/ri";
import GeneralHeader from "../components/GeneralHeader";
import JustForYou from "../components/JustForYou";

function Wishlist() {
  const dispatch = useDispatch();
  const reduxWishlistItems = useSelector((state) => state.wishlist.items);
  const itemCount = useSelector((state) => state.wishlist.itemCount);
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    // Load wishlist items from localStorage
    const savedWishlistItems =
      JSON.parse(localStorage.getItem("wishlist")) || [];

    // Only dispatch items to Redux if reduxWishlistItems is empty
    if (reduxWishlistItems.length === 0) {
      savedWishlistItems.forEach((item) => {
        // dispatch(addToWishlist(item));
      });
    }

    // Update local state with saved items
    setWishlistItems(savedWishlistItems);
  }, [reduxWishlistItems]);

  const handleRemoveFromWishlist = (item) => {
    const updatedWishlist = wishlistItems.filter(
      (wishlistItem) => wishlistItem.id !== item.id
    );
    setWishlistItems(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    dispatch(removeFromWishlist(item.id));
  };

  return (
    <div>
      <div className="mb-[10rem] flex flex-col gap-5">
        <GeneralHeader />
      </div>
      <div className="px-[10px] lg:px-[100px] flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <h1>Wishlist ({itemCount})</h1>
          <button className="border border-slate-600 p-4 rounded-[4px]">
            Move All To Bag
          </button>
        </div>
        <div className="grid mx-auto gap-7 grid-cols-1 mt-7 md:grid-cols-2 lg:grid-cols-4">
          {wishlistItems.length > 0 ? (
            wishlistItems.map((item) => (
              <div key={item.id} className="flex flex-col justify-center gap-4">
                <div className="bg-[#F5F5F5] flex items-center cursor-pointer p-8 w-[270px] h-[250px] relative">
                  {item.discount ? (
                    <div className="bg-[#DB4444] self-start absolute left-4 -top-[-20px] px-[16px] py-[4px] rounded-[4px] font-Poppins font-[400] text-[12px] leading-[18px] text-[#FAFAFA]">
                      <p>-40%</p>
                    </div>
                  ) : (
                    ""
                  )}
                  <img
                    src={item.img}
                    alt="game pad"
                    className={`self-center`}
                  />
                  <div className="absolute flex flex-col gap-3 p-2 left-[210px] -top-[0.4px]">
                    <div
                      onClick={() => handleRemoveFromWishlist(item)}
                      className={`rounded-full p-2 cursor-pointer `}>
                      <RiDeleteBin6Line className={`w-[24px] h-[24px]`} />
                    </div>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-75 h-10 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-[16px]">Add to Cart</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-Poppins font-[500] text-[16px] leading-6">
                    {item.name}
                  </h3>
                  <div className="flex justify-start items-center font-[500] font-Poppins text-[16px] leading-6 gap-3">
                    <p className="text-[#DB4444]">${item.price}</p>
                    <p className="line-through text-[#000000] opacity-[50%]">
                      ${item.prev_price}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="">Your wishlist is empty.</p>
          )}
        </div>
        <JustForYou />
      </div>
      {/* <div className="px-[10px] lg:px-[100px] flex flex-col gap-5 mt-10"></div> */}
    </div>
  );
}

export default Wishlist;
