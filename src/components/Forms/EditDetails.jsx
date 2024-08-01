import { useState } from "react";
import Account from "../../pages/Account";
import { Link } from "react-router-dom";
function EditDetails() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    address: "",
    current_password: "",
    new_password: "",
    confirm_password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // API call to update the details
    console.log(formData);
  };
  return (
    <Account>
      <div className="p-9 shadow-sm shadow-slate-300 flex flex-col gap-6">
        <h2 className="font-500 text-[20px] leading-7 text-[#DB4444]">
          Edit Your Profile
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-9">
          <div className="flex flex-col justify-between lg:flex-row">
            <div className="flex flex-col gap-5">
              <label className="font-Poppins font-[400] text-[16px] leading-[24px] text-[#000000]">
                First Name
              </label>
              <input
                type="text"
                id="first_name"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                placeholder="Md"
                className="outline-none p-3 bg-[#F5F5F5] rounded-[4px] opacity-[50%] text-[16px]"
              />
            </div>
            <div className="flex flex-col gap-5">
              <label className="font-Poppins font-[400] text-[16px] leading-[24px] text-[#000000]">
                Last Name
              </label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                placeholder="Rimel"
                className="outline-none p-3 bg-[#F5F5F5] rounded-[4px] opacity-[50%] text-[16px]"
              />
            </div>
          </div>
          <div className="flex flex-col justify-between lg:flex-row">
            <div className="flex flex-col gap-5">
              <label className="font-Poppins font-[400] text-[16px] leading-[24px] text-[#000000]">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="rimel1111@gmail.com"
                className="outline-none p-3 bg-[#F5F5F5] rounded-[4px] opacity-[50%] text-[16px]"
              />
            </div>
            <div className="flex flex-col gap-5">
              <label className="font-Poppins font-[400] text-[16px] leading-[24px] text-[#000000]">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Kingston, 5236, United State"
                className="outline-none p-3 bg-[#F5F5F5] rounded-[4px] opacity-[50%] text-[16px]"
              />
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="font-Poppins font-[400] text-[16px] leading-[24px] text-[#000000]">
              Password Changes
            </h2>
            <input
              type="password"
              id="current_password"
              name="current_password"
              value={formData.current_password}
              onChange={handleChange}
              placeholder="Current Password"
              className="outline-none p-3 bg-[#F5F5F5] rounded-[4px] opacity-[50%] text-[16px]"
            />
            <input
              type="password"
              id="new_password"
              name="new_password"
              value={formData.new_password}
              onChange={handleChange}
              placeholder="New Password"
              className="outline-none p-3 bg-[#F5F5F5] rounded-[4px] opacity-[50%] text-[16px]"
            />
            <input
              type="password"
              id="confirm_password"
              name="confirm_password"
              value={formData.confirm_password}
              onChange={handleChange}
              placeholder="Confirm Password"
              className="outline-none p-3 bg-[#F5F5F5] rounded-[4px] opacity-[50%] text-[16px]"
            />
          </div>
          <div className="flex justify-end gap-5">
            <Link
              to={"/"}
              className="py-4 px-12 rounded-[4px] text-black duration-200 hover:bg-black hover:text-white">
              Cancel
            </Link>
            <button
              type="submit"
              className="py-4 px-12 rounded-[4px] bg-[#DB4444] text-white hover:bg-[#9b3030]">
              Update
            </button>
          </div>
        </form>
      </div>
    </Account>
  );
}

export default EditDetails;
