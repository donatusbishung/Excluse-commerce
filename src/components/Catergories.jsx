import arrowRight from "../assets/images/Arrow-right.png";
import arrowLeft from "../assets/images/arrow-left.png";
import block from "../assets/images/Rectangle-block.png";
import { category } from "../Utils/Categories";
// import { CiMobile4 } from "react-icons/ci";

function Catergories() {
  return (
    <div className="px-[10px] lg:px-[100px] flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <img src={block} alt="block" />
        <p className="font-Poppins font-[600] text-[16px] leading-[20px] text-[#DB4444]">
          Catergories
        </p>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="font-Inter font-[600] text-[20px] lg:text-[36px] leading-[48px]">
          Browse By Category
        </h1>
        <div className="flex items-center gap-3">
          <img src={arrowLeft} alt="navigation" className="cursor-pointer" />
          <img src={arrowRight} alt="navigation" className="cursor-pointer" />
        </div>
      </div>
      <div className="grid grid-cols-1 px-[20px] md:px-0 lg:px-0 md:grid-cols-3 md:gap-4 lg:grid-cols-6 gap-3 mt-10">
        {category.map((card, i) => (
          <div
            key={i}
            className={`border p-5 flex flex-col items-center gap-3 duration-200 rounded-[4px] hover:bg-[#DB4444] hover:text-white ${
              card.isActive ? "bg-[#DB4444] text-white" : ""
            }`}>
            <img
              src={card.img}
              alt={card.name}
              className={`${card.isActive ? "" : ""}`}
            />
            <p className="font-Poppins text-[16px] leading-[24px]">
              {card.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catergories;
