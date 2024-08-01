import { IoIosHeartEmpty } from "react-icons/io";
import { PiEyeLight } from "react-icons/pi";
import { useEffect, useState } from "react";
import { products } from "../Utils/db";
import block from "../assets/images/Rectangle-block.png";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { addToWishlist } from "../features/wishlistSlice";

function JustForYou() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const wishlist = useSelector((state) => state.wishlist);
  const [clicked, setClicked] = useState(false);

  const handleAddToCart = (item) => {
    if (cart.items.some((e) => e.id === item.id)) {
      alert("Item already added to cart");
      return;
    }

    console.log("item", item);
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

    console.log("item", item);
    dispatch(addToWishlist(item));
    localStorage.setItem("wishlist", JSON.stringify([...wishlist.items, item]));
  };

  const allProducts = [
    ...products.game,
    ...products.clothing,
    ...products.food,
    ...products.utils,
  ];

  const bestSellingProducts = allProducts.filter(
    (product) => product.best_selling
  );

  const [cards, setCards] = useState(
    bestSellingProducts.map((card) => ({
      ...card,
      isHeartClicked: false,
      isEyeClicked: false,
    }))
  );

  const handleEyeClick = (index) => {
    setCards(
      cards.map((card, i) =>
        i === index ? { ...card, isEyeClicked: !card.isEyeClicked } : card
      )
    );
  };

  return (
    <div className=" flex flex-col gap-10 mb-10">
      <div className="flex items-center gap-3 justify-between mt-9">
        <div className="flex items-center gap-3">
          <img src={block} alt="block" />
          <p className="font-Poppins font-[600] text-[16px] leading-[20px] text-[#DB4444]">
            Just For You
          </p>
        </div>
        <div className="flex justify-between items-center">
          <button className="border border-slate-800 hidden lg:block rounded-[4px] lg:mb-7 px-[48px] py-[16px] font-Poppins text-[16px] leading-6 text-[#000000]">
            See All
          </button>
        </div>
      </div>
      <div className="grid mx-auto gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {cards.map((card, i) => (
          <div
            key={i}
            className="flex cursor-pointer flex-col justify-center gap-4">
            <div className="bg-[#F5F5F5] flex items-center p-8 w-[270px] h-[250px] relative">
              <img
                src={card.img}
                alt="game pad"
                className="w-[190px] h-[180px]"
              />
              <div className="absolute flex flex-col gap-3 p-2 left-[210px] -top-[0.4px]">
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
              <div
                onClick={() => handleAddToCart(card)}
                className="absolute cursor-pointer inset-x-0 bottom-0 bg-black bg-opacity-75 h-10 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-[16px]">Add to Cart</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-Poppins font-[500] text-[16px] leading-6">
                {card.name}
              </h3>
              <p className="text-[#DB4444]">
                ${card.price}
                <span className="text-[#000000] opacity-[50%] text-[16px] leading-6 line-through pl-2">
                  ${card.prev_price}
                </span>
              </p>
              <div className="flex items-center gap-3">
                <img src={card.star} alt="star" />
                <p className="text-[#000000] opacity-[50%] text-[16px] leading-6">
                  (65)
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JustForYou;
