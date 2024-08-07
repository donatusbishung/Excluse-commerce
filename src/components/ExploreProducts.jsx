import arrowRight from "../assets/images/Arrow-right.png";
import arrowLeft from "../assets/images/arrow-left.png";
import block from "../assets/images/Rectangle-block.png";
import { IoIosHeartEmpty } from "react-icons/io";
import { PiEyeLight } from "react-icons/pi";
import { useEffect, useState } from "react";
import { products } from "../Utils/db";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { addToWishlist, removeFromWishlist } from "../features/wishlistSlice";

function ExploreProducts() {
  const cart = useSelector((state) => state.cart);
  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  const [clickedCart, setClickedCart] = useState(false);
  const [clickedWishlist, setClickedWishlist] = useState(false);

  const handleAddToCart = (item) => {
    if (cart.items.some((e) => e.id === item.id)) {
      alert("Item already added to cart");
      return;
    }

    dispatch(addToCart(item));
    setClickedCart(true);
  };

  const handleWishlistToggle = (item) => {
    if (wishlist.items.some((e) => e.id === item.id)) {
      dispatch(removeFromWishlist(item));
    } else {
      dispatch(addToWishlist(item));
    }
    setClickedWishlist(true);
  };

  useEffect(() => {
    if (clickedCart) {
      localStorage.setItem("cart", JSON.stringify(cart.items));
      setClickedCart(false);
    }
  }, [clickedCart, cart]);

  useEffect(() => {
    if (clickedWishlist) {
      localStorage.setItem("wishlist", JSON.stringify(wishlist.items));
      setClickedWishlist(false);
    }
  }, [clickedWishlist, wishlist]);

  const allProducts = [
    ...products.game,
    ...products.clothing,
    ...products.food,
    ...products.utils,
  ];

  const PRODUCTS_PER_PAGE = 8;

  const [cards, setCards] = useState(
    allProducts.map((card) => ({
      ...card,
      isHeartClicked: wishlist.items.some((e) => e.id === card.id),
      isEyeClicked: false,
    }))
  );

  const [currentPage, setCurrentPage] = useState(0);

  const handleHeartClick = (index, item) => {
    // Prevent action if already clicked
    if (cards[index].isHeartClicked) {
      return;
    }

    setCards(
      cards.map((card, i) =>
        i === index ? { ...card, isHeartClicked: !card.isHeartClicked } : card
      )
    );
    handleWishlistToggle(item);
  };

  const handleEyeClick = (index) => {
    setCards(
      cards.map((card, i) =>
        i === index ? { ...card, isEyeClicked: !card.isEyeClicked } : card
      )
    );
  };

  const totalPages = Math.ceil(cards.length / PRODUCTS_PER_PAGE);

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => (prevPage > 0 ? prevPage - 1 : prevPage));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) =>
      prevPage < totalPages - 1 ? prevPage + 1 : prevPage
    );
  };

  const displayedCards = cards.slice(
    currentPage * PRODUCTS_PER_PAGE,
    (currentPage + 1) * PRODUCTS_PER_PAGE
  );

  return (
    <div className="px-[10px] lg:px-[100px] flex flex-col gap-5">
      <div className="flex items-center gap-3">
        <img src={block} alt="block" />
        <p className="font-Poppins font-[600] text-[16px] leading-[20px] text-[#DB4444]">
          Our Products
        </p>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="font-Inter font-[600] text-[20px] lg:text-[36px] leading-[48px]">
          Explore Our Products
        </h1>
        <div className="flex items-center gap-3">
          <img
            src={arrowLeft}
            alt="navigation"
            className={`cursor-pointer ${
              currentPage === 0 && "opacity-50 cursor-not-allowed"
            }`}
            onClick={handlePreviousPage}
          />
          <img
            src={arrowRight}
            alt="navigation"
            className={`cursor-pointer ${
              currentPage === totalPages - 1 && "opacity-50 cursor-not-allowed"
            }`}
            onClick={handleNextPage}
          />
        </div>
      </div>
      <div className="grid mx-auto gap-7 grid-cols-1 mt-7 md:grid-cols-2 lg:grid-cols-4">
        {displayedCards.map((card, i) => (
          <div key={i} className="flex flex-col justify-center gap-4">
            {/* image section */}
            <div className="bg-[#F5F5F5] flex items-center cursor-pointer p-8 w-[270px] h-[250px] relative">
              {card.isNew ? (
                <div className="bg-[#00FF66] self-start absolute left-4 -top-[-20px] px-[16px] py-[4px] rounded-[4px] font-Poppins font-[400] text-[12px] leading-[18px] text-[#FAFAFA]">
                  <p>NEW</p>
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
                  onClick={() => handleHeartClick(i, card)}>
                  {card.isHeartClicked ? (
                    <IoIosHeartEmpty className="w-[24px] h-[24px] text-white" />
                  ) : (
                    <IoIosHeartEmpty className="w-[24px] h-[24px] text-[#000000]" />
                  )}
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
              <div className="flex justify-start items-center gap-3">
                <p className="text-[#DB4444]">${card.price}</p>
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
    </div>
  );
}

export default ExploreProducts;
