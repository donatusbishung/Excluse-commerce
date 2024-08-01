import GeneralHeader from "../components/GeneralHeader";
import Footer from "../components/Footer";
import Account_sidebar from "../components/Account_sidebar";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Account({ children }) {
  return (
    <div className="flex flex-col gap-14">
      <div>
        <GeneralHeader />
      </div>
      <div className="pl-[10px] pt-[120px] lg:px-[100px]">
        <nav>
          <ul className="flex gap-[10px] font-Poppins text-[14px] leading-[20px] font-[400]">
            <Link to={"/"} className="opacity-[50%]">
              Home
            </Link>
            <p>/</p>
            <li>
              <a href="#">My Account</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="px-[10px] lg:px-[100px] flex gap-5">
        <div className="w-[100%] lg:w-[35%]">
          <Account_sidebar />
        </div>
        <div className=" w-full">{children}</div>
      </div>
      <Footer />
    </div>
  );
}

export default Account;
