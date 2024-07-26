import arrowRight from "../assets/images/Arrow-right.png";
import arrowLeft from "../assets/images/arrow-left.png";
import block from "../assets/images/Rectangle-block.png";
import { IoIosHeartEmpty } from "react-icons/io";
import { PiEyeLight } from "react-icons/pi";
import { FeaturedProducts } from "../Utils/ExploreProducts";
import { useState } from "react";

function ExploreProducts() {
  const [cards, setCards] = useState(
    FeaturedProducts.map((card) => ({
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
          Our Products
        </p>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="font-Inter font-[600] text-[20px] lg:text-[36px] leading-[48px]">
          Explore Our Products
        </h1>
        <div className="flex items-center gap-3">
          <img src={arrowLeft} alt="navigation" className="cursor-pointer" />
          <img src={arrowRight} alt="navigation" className="cursor-pointer" />
        </div>
      </div>
      <div className="grid mx-auto gap-7 grid-cols-1 mt-7 md:grid-cols-2 lg:grid-cols-4">
        {cards.map((card, i) => (
          <div key={i} className="flex flex-col justify-center gap-4">
            <div className="bg-[#F5F5F5] flex items-center cursor-pointer p-8 w-[270px] h-[250px] relative">
              {card.isNew ? (
                <div className="bg-[#00FF66] self-start absolute left-4 -top-[-20px] px-[16px] py-[4px] rounded-[4px] font-Poppins font-[400] text-[12px] leading-[18px] text-[#FAFAFA]">
                  <p>NEW</p>
                </div>
              ) : (
                ""
              )}
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
              <div className="flex justify-start items-center gap-3">
                <p className="text-[#DB4444]">{card.price}</p>
                <img src={card.star} alt="star" />
                <p className="text-[#000000] opacity-[50%] text-[16px] leading-6">
                  {card.span}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExploreProducts;
