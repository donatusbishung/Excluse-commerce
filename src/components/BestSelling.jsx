import { IoIosHeartEmpty } from "react-icons/io";
import { PiEyeLight } from "react-icons/pi";
import { useState } from "react";
import { BestSelling } from "../Utils/BestSelling";
import block from "../assets/images/Rectangle-block.png";

function BestSellingLayout() {
  const [cards, setCards] = useState(
    BestSelling.map((card) => ({
      ...card,
      isHeartClicked: false,
      isEyeClicked: false,
    }))
  );

  const handleHeartClick = (index) => {
    setCards(
      cards.map((card, i) =>
        i === index ? { ...card, isHeartClicked: !card.isHeartClicked } : card
      )
    );
  };

  const handleEyeClick = (index) => {
    setCards(
      cards.map((card, i) =>
        i === index ? { ...card, isEyeClicked: !card.isEyeClicked } : card
      )
    );
  };

  return (
    <div className="px-[10px] lg:px-[100px] flex flex-col gap-5">
      <div className="flex items-center gap-3">
        <img src={block} alt="block" />
        <p className="font-Poppins font-[600] text-[16px] leading-[20px] text-[#DB4444]">
          This Month
        </p>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="font-Inter font-[600] text-[20px] lg:text-[36px] leading-[48px]">
          Best Selling Products
        </h1>
        <button className="bg-[#DB4444] hidden lg:block rounded-[4px] lg:mb-7 px-[48px] py-[16px] font-Poppins text-[16px] leading-6 text-[#FAFAFA]">
          View All
        </button>
      </div>
      <div className="grid mx-auto gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {cards.map((card, i) => (
          <div key={i} className="flex flex-col justify-center gap-4">
            <div className="bg-[#F5F5F5] flex items-center p-8 w-[270px] h-[250px] relative">
              <img
                src={card.img}
                alt="game pad"
                className="w-[190px] h-[180px]"
              />
              <div className="absolute flex flex-col gap-3 p-2 left-[210px] -top-[0.4px]">
                <div
                  className={`rounded-full p-2 cursor-pointer ${
                    card.isHeartClicked
                      ? "bg-[#DB4444] text-white"
                      : "bg-white text-[#000000]"
                  }`}
                  onClick={() => handleHeartClick(i)}>
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
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-Poppins font-[500] text-[16px] leading-6">
                {card.name}
              </h3>
              <p className="text-[#DB4444]">
                {card.live_price}
                <span className="text-[#000000] opacity-[50%] text-[16px] leading-6 line-through pl-2">
                  {card.price_before}
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
      <button className="bg-[#DB4444] mx-auto mt-4 block lg:hidden rounded-[4px] lg:mb-7 px-[48px] py-[16px] font-Poppins text-[16px] leading-6 text-[#FAFAFA] duration-200 hover:bg-[#7e2626] hover:text-[#fffbfb]">
        View All
      </button>
    </div>
  );
}

export default BestSellingLayout;
