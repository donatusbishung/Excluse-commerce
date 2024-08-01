import GeneralHeader from "../components/GeneralHeader";
import Footer from "../components/Footer";
import About_layout1 from "../components/About-layouts/About_layout1";
import About_layout2 from "../components/About-layouts/About_layout2";
import About_layout3 from "../components/About-layouts/About_layout3";
import Service from "../components/Service";

function About() {
  return (
    <div className="flex flex-col justify-between gap-9 lg:gap-20">
      <div>
        <GeneralHeader />
      </div>
      <div className="pl-[10px] pt-[120px] lg:px-[100px]">
        <nav>
          <ul className="flex gap-[10px] font-Poppins text-[14px] leading-[20px] font-[400]">
            <li>
              <a href="#">Home</a>
            </li>
            <p>/</p>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </nav>
      </div>
      <About_layout1 />
      <About_layout2 />
      <About_layout3 />
      <Service />
      <Footer />
    </div>
  );
}

export default About;
