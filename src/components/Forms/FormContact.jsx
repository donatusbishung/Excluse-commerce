/* eslint-disable react/prop-types */
function FormContact({ handleSubmit, handleChange, formData }) {
  return (
    <div className="p-4 lg:p-6 shadow-sm shadow-slate-200 rounded-[4px]">
      <form onSubmit={handleSubmit} className="flex flex-col gap-7">
        <div className="grid grid-cols-1 gap-4 justify-center lg:gap-5 lg:grid-cols-3">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="bg-[#F5F5F5] font-Poppins font-[400] text-[16px] leading-[24px] p-3 outline-none text-[#000000] w-full"
          />
          <div>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="bg-[#F5F5F5] font-Poppins font-[400] text-[16px] leading-[24px] p-3 outline-none text-[#000000] w-full"
            />
          </div>
          <div>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone"
              className="bg-[#F5F5F5] font-Poppins font-[400] text-[16px] leading-[24px] p-3 outline-none text-[#000000] w-full"
            />
          </div>
        </div>

        <div>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="bg-[#F5F5F5] font-Poppins font-[400] text-[16px] leading-[24px] p-3 outline-none text-[#000000] w-full h-[207px]"
          />
        </div>
        <button className="self-center w-full lg:self-end lg:w-1/3 py-4 px-12 rounded-[4px] bg-[#DB4444] text-white">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default FormContact;
