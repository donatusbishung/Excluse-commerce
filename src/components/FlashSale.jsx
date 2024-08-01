import { products } from "../Utils/db";
import { useEffect, useState } from "react";
import block from "../assets/images/Rectangle-block.png";
import arrowRight from "../assets/images/Arrow-right.png";
import arrowLeft from "../assets/images/arrow-left.png";
import { IoIosHeartEmpty } from "react-icons/io";
import { PiEyeLight } from "react-icons/pi";
import CountDown from "./Timer/CountDown";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { addToWishlist } from "../features/wishlistSlice";

function FlashSale() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const wishlist = useSelector((state) => state.wishlist);
  const [clicked, setClicked] = useState(false);

  const handleAddToCart = (item) => {
    if (cart.items.some((e) => e.id === item.id)) {
      alert("Item already added to cart");
      return;
    }

    dispatch(addToCart(item));
    setClicked(true);
  };

  // useEffect to save cart items
  useEffect(() => {
    if (clicked) {
      localStorage.setItem("cart", JSON.stringify(cart.items));
    }
    setClicked(false);
  }, [clicked, cart]);

  const handleAddToWishlist = (item) => {
    if (wishlist.items.some((e) => e.id === item.id)) {
      alert("Item already added to wishlist");
      return;
    }

    dispatch(addToWishlist(item));
    localStorage.setItem("wishlist", JSON.stringify([...wishlist.items, item]));
  };

  const allProducts = [
    ...products.game,
    ...products.clothing,
    ...products.food,
    ...products.utils,
  ];
  const flashSaleProducts = allProducts.filter((product) => product.discount);
  const [cards, setCards] = useState(
    flashSaleProducts.map((card) => ({
      ...card,
      isHeartClicked: false,
      isEyeClicked: false,
    }))
  );

  const handleHeartClick = (item, index) => {
    if (wishlist.items.some((e) => e.id === item.id)) {
      return;
    }

    setCards(
      cards.map((card, i) =>
        i === index ? { ...card, isHeartClicked: true } : card
      )
    );
    handleAddToWishlist(item);
  };

  const handleEyeClick = (index) => {
    setCards(
      cards.map((card, i) =>
        i === index ? { ...card, isEyeClicked: !card.isEyeClicked } : card
      )
    );
  };

  return (
    <div className="px-[10px] lg:pl-[100px] flex flex-col gap-5 overflow-hidden">
      <div className="flex items-center gap-3">
        <img src={block} alt="block" />
        <p className="font-Poppins font-[600] text-[16px] leading-[20px] text-[#DB4444]">
          Today&apos;s
        </p>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col items-center gap-3 lg:gap-7 lg:flex-row">
          <h1 className="font-Inter self-start font-[600] text-[20px] lg:text-[36px] leading-[48px]">
            Flash Sales
          </h1>
          <CountDown />
        </div>
        <div className="hidden items-center gap-3 lg:pr-[100px] lg:flex">
          <img src={arrowLeft} alt="navigation" className={`cursor-pointer `} />
          <img
            src={arrowRight}
            alt="navigation"
            className={`cursor-pointer `}
          />
        </div>
      </div>
      <div className="grid mx-auto gap-7 grid-cols-1 mt-7 md:grid-cols-2 lg:flex">
        {cards.map((card, i) => (
          <div key={i} className="flex flex-col justify-center gap-4">
            {/* image section */}
            <div className="bg-[#F5F5F5] flex items-center cursor-pointer p-8 w-[270px] h-[250px] relative">
              {card.discount ? (
                <div className="bg-[#DB4444] self-start absolute left-4 -top-[-20px] px-[16px] py-[4px] rounded-[4px] font-Poppins font-[400] text-[12px] leading-[18px] text-[#FAFAFA]">
                  <p>-40%</p>
                </div>
              ) : (
                ""
              )}
              <img src={card.img} alt="game pad" className={`self-center`} />
              <div className="absolute flex flex-col gap-3 p-2 left-[210px] -top-[0.4px]">
                <div
                  className={`rounded-full p-2 cursor-pointer ${
                    card.isHeartClicked
                      ? "bg-[#DB4444] text-white"
                      : "bg-white text-[#000000]"
                  }`}
                  onClick={() => handleHeartClick(card, i)}>
                  <IoIosHeartEmpty
                    className={`w-[24px] h-[24px] duration-200 ${
                      card.isHeartClicked ? "text-white" : "text-[#000000]"
                    }`}
                  />
                </div>
                <div
                  className={`rounded-full p-2 cursor-pointer duration-200 ${
                    card.isEyeClicked
                      ? "bg-[#DB4444] text-white"
                      : "bg-white text-[#000000]"
                  }`}
                  onClick={() => handleEyeClick(i)}>
                  <PiEyeLight
                    className={`w-[24px] h-[24px] ${
                      card.isEyeClicked ? "text-white" : "text-[#000000]"
                    }`}
                  />
                </div>
              </div>
              {/* Add to Cart pop-up */}
              <div
                onClick={() => handleAddToCart(card)}
                className="absolute inset-x-0 bottom-0 bg-black bg-opacity-75 h-10 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-[16px]">Add to Cart</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-Poppins font-[500] text-[16px] leading-6">
                {card.name}
              </h3>
              <div className="flex justify-start items-center font-[500] font-Poppins text-[16px] leading-6 gap-3">
                <p className="text-[#DB4444]">${card.price}</p>
                <p className="line-through text-[#000000] opacity-[50%]">
                  ${card.prev_price}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <img src={card.star} alt="star" />
                <p className="text-[#000000] opacity-[50%] text-[16px] leading-6">
                  {card.span}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="bg-[#DB4444] mt-16 font-Poppins font-[500] text-[16px] leading-6 py-[16px] px-[48px] self-center rounded-[4px] text-white hover:bg-[#eb7e7e]">
        View All Products
      </button>
      <div className="border-b border-slate-200 pt-10 hidden lg:block"></div>
    </div>
  );
}

export default FlashSale;
