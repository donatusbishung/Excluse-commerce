import Footer from "../components/Footer";
import GeneralHeader from "../components/GeneralHeader";
import phone from "../assets/images/icons-phone.png";
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import FormContact from "../components/Forms/FormContact";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send form data to your backend API here
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };
  return (
    <div className="flex flex-col gap-12">
      <div>
        <GeneralHeader />
      </div>
      <div className="pl-[10px] pt-[80px] lg:pt-[120px] lg:px-[100px]">
        <nav>
          <ul className="flex gap-[10px] font-Poppins text-[14px] leading-[20px] font-[400]">
            <li>
              <a href="#">Home</a>
            </li>
            <p>/</p>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
      {/* Add your contact form here */}
      <div className="flex flex-col px-[15px] lg:px-[100px] lg:flex-row justify-center gap-10 ">
        <div className="flex flex-col gap-6 p-4 lg:py-9 lg:px-10 w-[100%] lg:w-[50%] shadow-sm shadow-slate-200 rounded-[4px]">
          <div className="flex flex-col justify-center gap-5">
            <h1 className="font-Poppins font-[500] text-[16px] leading-[24px] flex items-center gap-3">
              <span>
                <img src={phone} alt="phone" />
              </span>
              Call To Us
            </h1>
            <p className="font-Poppins font-[400] text-[14px] leading-[21px] text-[#000000]">
              We are available 24/7, 7 days a week.
            </p>
            <p className="font-Poppins font-[400] text-[14px] leading-[21px] text-[#000000]">
              Phone: +8801611112222
            </p>
          </div>
          <hr className="bg-[#000000]" style={{ color: "#000000" }} />
          <div className="flex flex-col justify-center gap-4">
            <h1 className="font-Poppins font-[500] text-[16px] leading-[24px] flex items-center gap-3">
              <span>
                <img src={phone} alt="phone" />
              </span>
              Write To US
            </h1>
            <p className="font-Poppins font-[400] text-[14px] leading-[21px] text-[#000000]">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p className="font-Poppins font-[400] text-[14px] leading-[21px] text-[#000000]">
              Emails: customer@exclusive.com
            </p>
            <p className="font-Poppins font-[400] text-[14px] leading-[21px] text-[#000000]">
              Emails: support@exclusive.com
            </p>
          </div>
        </div>
        <FormContact
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          formData={formData}
        />
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
