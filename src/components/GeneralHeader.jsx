// import { useState } from "react";
// import { IoCartOutline } from "react-icons/io5";
// import { CiSearch, CiHeart } from "react-icons/ci";
// import { PiUserLight } from "react-icons/pi";
// import { MdOutlineClear } from "react-icons/md";
// import { HiOutlineMenuAlt3 } from "react-icons/hi";
// import { CiLogout } from "react-icons/ci";
// import { CiStar } from "react-icons/ci";
// import { TiDeleteOutline } from "react-icons/ti";
// import { CiGift } from "react-icons/ci";
// import { Link } from "react-router-dom";
// import { navLinks } from "../Utils/Navigation";

// function GeneralHeader() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [userMenuOpen, setUserMenuOpen] = useState(false);

//   const [isClicked, setIsClicked] = useState(false);

//   const handleUserClick = () => {
//     setIsClicked((prev) => !prev);
//   };

//   const toggleUserMenu = () => {
//     setUserMenuOpen(!userMenuOpen);
//   };

//   return (
//     <div className="bg-white border-b border-gray-200 relative">
//       <div className="px-[10px] flex justify-between items-center py-6 lg:px-[100px] font-Inter">
//         <h1 className="text-[#000000] font-[700] text-[24px] leading-6">
//           Exclusive
//         </h1>
//         <ul
//           className={`list-none hidden lg:inline-flex items-center ${
//             menuOpen ? "block" : "hidden"
//           } lg:flex`}>
//           {navLinks.map((links, i) => (
//             <li
//               key={i}
//               className="lg:pr-16 cursor-pointer text-[16px] leading-6 font-[400] p-4 lg:p-0">
//               <Link to={links.href}>{links.title}</Link>
//             </li>
//           ))}
//         </ul>
//         <div className="flex justify-center items-center gap-3 relative">
//           <div className="bg-[#F5F5F5] p-2 rounded-sm hidden lg:flex">
//             <input
//               type="text"
//               placeholder="What are you looking for?"
//               className="font-[400] bg-[#F5F5F5] outline-none hidden lg:flex text-[12px] leading-4 opacity-[50%]"
//             />
//             <CiSearch className="font-bold hidden lg:block w-[24px] h-[24px]" />
//           </div>
//           <CiHeart className="w-[24px] h-[24px] cursor-pointer" />
//           <IoCartOutline className="w-[24px] h-[24px] cursor-pointer" />
//           <div
//             className={`relative rounded-full p-2  ${
//               isClicked ? "bg-[#DB4444] text-white" : ""
//             }`}
//             onClick={handleUserClick}>
//             <PiUserLight
//               className="w-[24px] h-[24px] cursor-pointer"
//               onClick={toggleUserMenu}
//             />
//             {/* fix this part here */}
//             {userMenuOpen && (
//               <div className="absolute -right-14 lg:right-0 mt-2 w-[225px] h-[208px] bg-black opacity-[50%] border border-gray-200 rounded-[4px] shadow-lg z-10">
//                 <ul className="list-none flex flex-col text-[14px] font-Poppins font-[400]">
//                   <li className="cursor-pointer  flex items-center gap-3 leading-6 text-white font-[400] py-2 px-4 hover:bg-gray-400 hover:text-black">
//                     <span>
//                       <PiUserLight />
//                     </span>
//                     <Link to="/account">Manage My Account</Link>
//                   </li>
//                   <li className="cursor-pointer  flex items-center gap-3 leading-6 text-white font-[400] py-2 px-4 hover:bg-gray-400 hover:text-black">
//                     <span>
//                       <CiGift />
//                     </span>
//                     My Oder
//                   </li>
//                   <li className="cursor-pointer  flex items-center gap-3 leading-6 text-white font-[400] py-2 px-4 hover:bg-gray-400 hover:text-black">
//                     <span>
//                       <TiDeleteOutline />
//                     </span>
//                     My Cancellations
//                   </li>
//                   <li className="cursor-pointer  flex items-center gap-3 leading-6 text-white font-[400] py-2 px-4 hover:bg-gray-400 hover:text-black">
//                     <span>
//                       <CiStar />
//                     </span>
//                     My Reviews
//                   </li>
//                   <li className="cursor-pointer  flex items-center gap-3 leading-6 text-white font-[400] py-2 px-4 hover:bg-gray-400 hover:text-black">
//                     <span>
//                       <CiLogout />
//                     </span>
//                     Logout
//                   </li>
//                 </ul>
//               </div>
//             )}
//           </div>
//           <button
//             className="lg:hidden p-2"
//             onClick={() => setMenuOpen(!menuOpen)}>
//             {menuOpen ? (
//               <MdOutlineClear className="w-[32px] h-[32px]" />
//             ) : (
//               <HiOutlineMenuAlt3 className="w-[32px] h-[32px]" />
//             )}
//           </button>
//         </div>
//       </div>
//       {menuOpen && (
//         <div className="lg:hidden">
//           <ul className="list-none flex flex-col items-center">
//             {navLinks.map((links, i) => (
//               <li
//                 key={i}
//                 className="lg:pr-16 cursor-pointer text-[16px] leading-6 font-[400] p-4 lg:p-0">
//                 <Link to={links.href}>{links.title}</Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }

// export default GeneralHeader;
import { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { CiSearch, CiHeart } from "react-icons/ci";
import { PiUserLight } from "react-icons/pi";
import { MdOutlineClear } from "react-icons/md";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { CiLogout } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { TiDeleteOutline } from "react-icons/ti";
import { CiGift } from "react-icons/ci";
import { Link } from "react-router-dom";
import { navLinks } from "../Utils/Navigation";

function GeneralHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const [isClicked, setIsClicked] = useState(false);

  const handleUserClick = () => {
    setIsClicked((prev) => !prev);
  };

  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen);
  };

  return (
    <div className="bg-white border-b border-gray-200 relative">
      <div className="px-[10px] flex justify-between items-center py-6 lg:px-[100px] font-Inter">
        <div className="flex items-center">
          <button
            className="lg:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <MdOutlineClear className="w-[32px] h-[32px]" />
            ) : (
              <HiOutlineMenuAlt3 className="w-[32px] h-[32px]" />
            )}
          </button>
          <h1 className="text-[#000000] font-[700] text-[24px] leading-6 ml-4">
            Exclusive
          </h1>
        </div>
        <ul
          className={`list-none hidden lg:inline-flex items-center ${
            menuOpen ? "block" : "hidden"
          } lg:flex`}>
          {navLinks.map((links, i) => (
            <li
              key={i}
              className="lg:pr-16 cursor-pointer text-[16px] leading-6 font-[400] p-4 lg:p-0">
              <Link to={links.href}>{links.title}</Link>
            </li>
          ))}
        </ul>
        <div className="flex justify-center items-center gap-3 relative">
          <div className="bg-[#F5F5F5] p-2 rounded-sm hidden lg:flex">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="font-[400] bg-[#F5F5F5] outline-none hidden lg:flex text-[12px] leading-4 opacity-[50%]"
            />
            <CiSearch className="font-bold hidden lg:block w-[24px] h-[24px]" />
          </div>
          <CiHeart className="w-[24px] h-[24px] cursor-pointer" />
          <IoCartOutline className="w-[24px] h-[24px] cursor-pointer" />
          <div
            className={`relative rounded-full p-2  ${
              isClicked ? "bg-[#DB4444] text-white" : ""
            }`}
            onClick={handleUserClick}>
            <PiUserLight
              className="w-[24px] h-[24px] cursor-pointer"
              onClick={toggleUserMenu}
            />
            {userMenuOpen && (
              <div className="absolute -right-2 mt-3 lg:right-0 w-[225px] h-[208px] bg-black opacity-[50%] border border-gray-200 rounded-[4px] shadow-lg z-10">
                <ul className="list-none flex flex-col text-[14px] font-Poppins font-[400]">
                  <li className="cursor-pointer  flex items-center gap-3 leading-6 text-white font-[400] py-2 px-4 hover:bg-gray-400 hover:text-black">
                    <span>
                      <PiUserLight />
                    </span>
                    <Link to="/account">Manage My Account</Link>
                  </li>
                  <li className="cursor-pointer  flex items-center gap-3 leading-6 text-white font-[400] py-2 px-4 hover:bg-gray-400 hover:text-black">
                    <span>
                      <CiGift />
                    </span>
                    My Order
                  </li>
                  <li className="cursor-pointer  flex items-center gap-3 leading-6 text-white font-[400] py-2 px-4 hover:bg-gray-400 hover:text-black">
                    <span>
                      <TiDeleteOutline />
                    </span>
                    My Cancellations
                  </li>
                  <li className="cursor-pointer  flex items-center gap-3 leading-6 text-white font-[400] py-2 px-4 hover:bg-gray-400 hover:text-black">
                    <span>
                      <CiStar />
                    </span>
                    My Reviews
                  </li>
                  <li className="cursor-pointer  flex items-center gap-3 leading-6 text-white font-[400] py-2 px-4 hover:bg-gray-400 hover:text-black">
                    <span>
                      <CiLogout />
                    </span>
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className="lg:hidden">
          <ul className="list-none flex flex-col items-start">
            {navLinks.map((links, i) => (
              <li
                key={i}
                className="lg:pr-16 cursor-pointer text-[16px] leading-6 font-[400] p-4 mb-2 lg:p-0">
                <Link to={links.href}>{links.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default GeneralHeader;
