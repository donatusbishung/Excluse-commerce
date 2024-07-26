import { Services } from "../Utils/ServiceDel";

function Service() {
  return (
    <div>
      <div className="px-[10px] lg:px-[100px] grid grid-cols-1 md:grid-cols-3 mt-6 lg:grid-cols-3 gap-4">
        {Services.map((card, i) => (
          <div
            key={i}
            className="flex flex-col justify-center items-center gap-3">
            <img
              src={card.img}
              alt="service image"
              className="w-[80px] h-[80px]"
            />
            <h1 className="text-center font-Poppins text-[20px] font-[600] leading-[28px] text-[#000000]">
              {card.header}
            </h1>
            <p className="text-center font-Poppins text-[14px] leading-[21px] font-[400] text-[#000000] mb-5 lg:mb-0">
              {card.paragraph}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Service;
