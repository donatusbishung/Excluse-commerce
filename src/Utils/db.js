import Benz from "../assets/images/Benz.png";
import boot from "../assets/images/boot.png";
import camera from "../assets/images/camera.png";
import millo from "../assets/images/millo.png";
import jacket from "../assets/images/jacket.png";
import lotion from "../assets/images/lotion.png";
import pc from "../assets/images/pc.png";
import gamePad from "../assets/images/game-pad.png";
import fullStar from "../assets/images/Five-star.png";
import halfStar from "../assets/images/Four-Half-Star.png";
import fourStar from "../assets/images/Four-Star.png";
import threeStar from "../assets/images/Three-Star.png";
import Frame1 from "../assets/images/Frame1.png";
import Frame2 from "../assets/images/Frame2.png";
import Frame3 from "../assets/images/Frame3.png";
import Frame4 from "../assets/images/Frame4.png";
import keyboard from "../assets/images/keyboard.png";
import game2 from "../assets/images/game2.png";
import chair from "../assets/images/chair.png";
import monitor from "../assets/images/monitor.png";

export const products = {
  game: [
    {
      id: 1,
      img: game2,
      name: "HAVIT HV-G92 Gamepad",
      price: 120,
      prev_price: 160,
      flash_sale: true,
      discount: true,
      star: fullStar,
      span: "(88)",
    },
    {
      id: 2,
      img: keyboard,
      name: "AK-900 Wired Keyboard",
      price: 960,
      prev_price: 1160,
      flash_sale: true,
      discount: true,
      span: "(75)",
      star: fourStar,
      height: "101px",
      width: "191px",
    },
    {
      id: 3,
      img: monitor,
      name: "IPS LCD Gaming Monitor",
      price: 370,
      prev_price: 400,
      flash_sale: true,
      discount: true,
      star: fullStar,
    },
    {
      id: 4,
      img: pc,
      name: "ASUS FHD Gaming Laptop",
      price: 700,
      star: fullStar,
      span: "(325)",
      isNew: false,
    },
    {
      id: 5,
      img: gamePad,
      name: "GP11 Shooter USB Gamepad",
      price: 660,
      isNew: true,
      star: halfStar,
    },
  ],
  clothing: [
    {
      id: 6,
      img: Frame1,
      name: "The North Coat",
      price: 260,
      prev_price: 360,
      best_selling: true,
      isNew: true,
      star: fullStar,
    },
    {
      id: 7,
      img: Frame2,
      name: "Gucci Duffle Bag",
      price: 960,
      prev_price: 1160,
      best_selling: true,
      star: fourStar,
    },
    {
      id: 8,
      img: jacket,
      name: "Quilted Satin Jacket",
      price: 660,
      star: halfStar,
      span: "(35)",
      isNew: false,
    },
    {
      id: 9,
      img: lotion,
      name: "Curology Product Set",
      price: 500,
      star: fourStar,
      span: "(145)",
      isNew: false,
      discount: true,
    },
    {
      id: 10,
      img: boot,
      name: "Jr. Zoom Soccer Cleats",
      price: 1160,
      star: fullStar,
      span: "(35)",
      isNew: false,
    },
  ],
  food: [
    {
      id: 11,
      img: millo,
      name: "Breed Dry Dog Food",
      price: 100,
      star: threeStar,
      span: "(35)",
      isNew: false,
    },
  ],
  utils: [
    {
      id: 12,
      img: chair,
      name: "S-Series Comfort Chair",
      price: 375,
      prev_price: 400,
      discount: true,
      flash_sale: true,
      star: halfStar,
    },
    {
      id: 13,
      img: Frame3,
      name: "RGB Liquid CPU Cooler",
      price: 160,
      prev_price: 170,
      star: halfStar,
      best_selling: true,
    },
    {
      id: 14,
      img: Frame4,
      name: "Small Bookshelf",
      price: 360,
      star: fullStar,
      best_selling: true,
    },
    {
      id: 15,
      img: camera,
      name: "CANON EOS DSLR Camera",
      price: 360,
      star: fourStar,
      span: "(95)",
      isNew: false,
    },
    {
      id: 16,
      img: Benz,
      name: "Kids Electric Car",
      price: 360,
      isNew: true,
      star: fourStar,
      span: "(65)",
    },
  ],
};
