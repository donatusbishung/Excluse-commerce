import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function CategoriesHero() {
  const items = [
    {
      id: 1,
      title: "Woman's Fashion",
      dropDown: true,
    },
    {
      id: 2,
      title: "Mens's Fashion",
      dropDown: true,
    },
    {
      id: 3,
      title: "Electronics",
    },
    {
      id: 4,
      title: "Home & Lifestyle",
    },
    {
      id: 5,
      title: "Medicine",
    },
    {
      id: 6,
      title: "Sports & Outdoor",
    },
    {
      id: 7,
      title: "Baby's & Toys",
    },
    {
      id: 8,
      title: "Groceries & Pets",
    },
    {
      id: 9,
      title: "Health & Beauty",
    },
  ];
  return (
    <div className="w-[217px] mr-5 hidden lg:block">
      {items.map((item, i) => (
        <ul key={i}>
          <li className="flex justify-between items-center gap-2 mb-6 cursor-pointer font-Poppins font-[400] text-[16px] leading-[24px] duration-200 hover:text-[#DB4444]">
            {item.title}{" "}
            <span>
              {item.dropDown && (
                <MdOutlineKeyboardArrowRight className="w-[24px] h-[24px]" />
              )}
            </span>
          </li>
          {/* drop down for items listed above */}
          {/* {item.dropDown && (
            <ul>
              <li>hello</li>
            </ul>
          )} */}
        </ul>
      ))}
    </div>
  );
}

export default CategoriesHero;
