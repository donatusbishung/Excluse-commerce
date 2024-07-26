import { FiFacebook } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { RiLinkedinLine } from "react-icons/ri";
import { VscSend } from "react-icons/vsc";
import socials from "../assets/socials.png";

function Footer() {
  return (
    <div className="bg-black">
      <div className="px-[10px] flex flex-col lg:items-start lg:px-[100px] lg:flex lg:flex-row lg:justify-between  gap-[3rem] py-16">
        <div className="flex flex-col justify-between gap-3">
          <p className="font-[700] text-[24px] text-[#FAFAFA]">Exclusive</p>
          <p className="text-primary font-[500] text-[20px] leading-7">
            Subscribe
          </p>
          <p className="text-primary font-[400] text-[16px] leading-6">
            Get 10% off your first order
          </p>
          <div className="border-2 border-primary rounded-md p-2 text-primary font-[400] w-[217px] text-[16px] flex justify-between items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-black outline-none w-full opacity-40"
            />
            <VscSend className="text-white w-[24px] h-[24px] cursor-pointer" />
          </div>
        </div>
        <div className="flex flex-col justify-between gap-3">
          <p className="font-[500] text-[20px] text-[#FAFAFA]">Support</p>
          <p className="text-primary font-[400] text-[16px] leading-6">
            111 Bijoy sarani, Dhaka,
            <br /> DH 1515, Bangladesh.
          </p>
          <p className="text-primary font-[400] text-[16px] leading-6">
            exclusive@gmail.com
          </p>
          <p className="text-primary font-[400] text-[16px] leading-6">
            +88015-88888-9999
          </p>
        </div>
        <div className="flex flex-col justify-between gap-3">
          <p className="font-[500] text-[20px] text-[#FAFAFA]">Account</p>
          <p className="text-primary font-[400] text-[16px] leading-6 cursor-pointer transition ease-out hover:text-gray-500">
            My Account
          </p>
          <p className="text-primary font-[400] text-[16px] leading-6 cursor-pointer transition ease-out hover:text-gray-500">
            Login / Register
          </p>
          <p className="text-primary font-[400] text-[16px] leading-6 cursor-pointer transition ease-out hover:text-gray-500">
            Cart
          </p>
          <p className="text-primary font-[400] text-[16px] leading-6 cursor-pointer transition ease-out hover:text-gray-500">
            Wishlist
          </p>
          <p className="text-primary font-[400] text-[16px] leading-6 cursor-pointer transition ease-out hover:text-gray-500">
            Shop
          </p>
        </div>
        <div className="flex flex-col justify-between gap-3">
          <p className="font-[500] text-[20px] text-[#FAFAFA]">Quick Links</p>
          <p className="text-primary font-[400] text-[16px] leading-6 cursor-pointer transition ease-out hover:text-gray-500">
            Privacy Policy
          </p>
          <p className="text-primary font-[400] text-[16px] leading-6 cursor-pointer transition ease-out hover:text-gray-500">
            Terms of Use
          </p>
          <p className="text-primary font-[400] text-[16px] leading-6 cursor-pointer transition ease-out hover:text-gray-500">
            FAQ
          </p>
          <p className="text-primary font-[400] text-[16px] leading-6 cursor-pointer transition ease-out hover:text-gray-500">
            Contact
          </p>
        </div>
        <div className="flex flex-col justify-between gap-3">
          <p className="font-[500] text-[20px] text-[#FAFAFA]">Download App</p>
          <p className="text-primary font-[400] text-[12px] leading-6">
            Save $3 with App New User Only
          </p>
          <div className="flex flex-col justify-center cursor-pointer">
            <img
              src={socials}
              alt="social media icons"
              className="w-[198px] h-[84px]"
            />
          </div>
          <div className="flex justify-start items-center gap-2">
            <FiFacebook className="text-white cursor-pointer w-[10.5px] h-[18px]" />
            <FaXTwitter className="text-white cursor-pointer w-[20px] h-[16px]" />
            <FaInstagram className="text-white cursor-pointer w-[18px] h-[18px]" />
            <RiLinkedinLine className="text-white cursor-pointer w-[24px] h-[24]" />
          </div>
        </div>
      </div>
      <div className="border-t border-gray-500 p-4">
        <p className="text-[#FFFFFF] font-[400] text-[16px] text-center opacity-35 leading-4">
          Copyright Rimel 2022. All right reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
