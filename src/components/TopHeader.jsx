import { MdKeyboardArrowDown } from "react-icons/md";

function TopHeader() {
  return (
    <div className="bg-black hidden lg:block text-white p-3">
      <div className="flex justify-between items-center container px-0 lg:px-[100px] mx-auto">
        <div className="flex-grow text-center">
          <p className="text-[12px] lg:text-[14px] font-[400] leading-5">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <span className="underline font-[600] leading-6 ml-3 cursor-pointer">
              ShopNow
            </span>
          </p>
        </div>
        <p className="text-center text-[12px] lg:text-[14px] font-[400] leading-5 inline-flex items-center">
          English
          <span>
            <MdKeyboardArrowDown className="" />
          </span>
        </p>
      </div>
    </div>
  );
}

export default TopHeader;
