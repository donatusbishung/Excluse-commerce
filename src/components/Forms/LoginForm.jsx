import { useState } from "react";

function SignUpForm() {
  const [formData, setFormData] = useState({
    email_phone: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // API call to register the user
    console.log(formData);
  };
  return (
    <div className="flex flex-col justify-center gap-8">
      <div className="flex flex-col gap-6 mb-3">
        <h1 className="font-Inter text-[36px] font-[500] leading-[30px] text-[#000000]">
          Log in to Exclusive
        </h1>
        <p className="font-Poppins font-[400] text-[16px] leading-[24px] text-[#000000]">
          Enter your details below
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center gap-6">
        <input
          type="email"
          id="email_phone"
          name="email_phone"
          value={formData.email_phone}
          onChange={handleChange}
          placeholder="Email or Phone Number"
          className="font-[400] text-[16px] leading-[24px] text-[#000000] opacity-[40%] outline-none p-3 border-b border-slate-500"
        />
        <input
          type="text"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          className="font-[400] text-[16px] leading-[24px] text-[#000000] opacity-[40%] outline-none p-3 border-b border-slate-500"
        />
        <button
          type="submit"
          className="font-Poppins font-[500] text-[16px] leading-[24px] text-[#FAFAFA] bg-[#DB4444] py-[16px] mt-5 hover:bg-[#973131] duration-200 rounded-[4px]">
          Creat Account
        </button>
      </form>
    </div>
  );
}

export default SignUpForm;
