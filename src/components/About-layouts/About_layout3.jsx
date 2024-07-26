// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { AboutSlides } from "../../Utils/AboutSlide";
import { PiTwitterLogoLight } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import { RiLinkedinLine } from "react-icons/ri";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import ".././../index.css";

// import required modules
import { Pagination } from "swiper/modules";

export default function About_layout3() {
  return (
    <>
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination]}
        slidesPerView={3}
        spaceBetween={100}
        className="mySwiper px-[100px] mt-5">
        {AboutSlides.map((slides, i) => (
          <SwiperSlide key={i}>
            <div className="flex flex-col gap-4">
              <div>
                <img src={slides.img} alt="hello image" />
              </div>
              <div className="flex flex-col justify-start gap-3">
                <p className="text-start">{slides.name}</p>
                <ul className="list-none inline-flex gap-3 items-center">
                  <li>
                    <PiTwitterLogoLight />
                  </li>
                  <li>
                    <FaInstagram />
                  </li>
                  <li>
                    <RiLinkedinLine />
                  </li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
