import apple from "../../assets/images/Hero_img.png";
import appLogo from "../../assets/images/apple.png";
import { IoIosArrowRoundForward } from "react-icons/io";

function HeroSlide() {
  return (
    <div className="bg-black text-white flex p-10">
      <div className="flex flex-col gap-6">
        <p className="flex items-center gap-4 font-Poppins text-[16px] leading-[24px] font-[400]">
          <span className="text-white">
            <img src={appLogo} alt="iphone" />
          </span>
          iPhone 14 Series
        </p>
        <h1 className="font-Inter font-[600] text-[48px] leading-[60px]">
          Up to 10% off Voucher
        </h1>
        <p className="flex items-center gap-3">
          Shop Now{" "}
          <span>
            <IoIosArrowRoundForward className="w-[24px] h-[24px]" />
          </span>
        </p>
      </div>
      <div>
        <img src={apple} alt="iphone" />
      </div>
    </div>
  );
}

export default HeroSlide;
