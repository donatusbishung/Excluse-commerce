import jbl from "../assets/images/jbl.png";

function HomeCategories() {
  return (
    <div className="px-[100px]">
      <div className="bg-black text-white hidden md:flex md:mx-auto lg:flex md:p-12 lg:p-24">
        <div className="flex flex-col gap-6 ">
          <p className="flex items-center gap-4 font-Poppins text-[16px] leading-[24px] font-[400]">
            iPhone 14 Series
          </p>
          <h1 className="font-Inter font-[600] text-[48px] leading-[60px]">
            Up to 10% off Voucher
          </h1>
          <div className="flex items-center gap-3"></div>
        </div>
        <div>
          <img src={jbl} alt="iphone" />
        </div>
      </div>
      <div className="bg-black text-white block md:hidden lg:hidden p-9 relative">
        <div className="flex flex-col gap-6 z-20 relative">
          <p className="flex items-center gap-4 font-Poppins text-[16px] leading-[24px] font-[400]">
            iPhone 14 Series
          </p>
          <h1 className="font-Inter font-[600] text-[48px] leading-[60px]">
            Up to 10% off Voucher
          </h1>
          <div className="flex items-center gap-3"></div>
        </div>
        <div className="absolute top-20">
          <img src={jbl} alt="iphone" />
        </div>
      </div>
    </div>
  );
}

export default HomeCategories;
