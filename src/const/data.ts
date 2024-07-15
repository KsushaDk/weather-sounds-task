import summerSound from "../../public/assets/sounds/summer.mp3";
import rainSound from "../../public/assets/sounds/rain.mp3";
import winterSound from "../../public/assets/sounds/winter.mp3";

import summerBg from "../../public/assets/summer-bg.jpg";
import rainBg from "../../public/assets/rainy-bg.jpg";
import winterBg from "../../public/assets/winter-bg.jpg";

import summerSvg from "../../public/assets/icons/sun.svg";
import rainSvg from "../../public/assets/icons/cloud-rain.svg";
import winterSvg from "../../public/assets/icons/cloud-snow.svg";

import { DataWeatherItems } from "../types/weatherTypes";

const data: DataWeatherItems = [
  {
    mode: "summer",
    sound: summerSound,
    bg: summerBg,
    svg: summerSvg,
  },
  {
    mode: "rain",
    sound: rainSound,
    bg: rainBg,
    svg: rainSvg,
  },
  {
    mode: "winter",
    sound: winterSound,
    bg: winterBg,
    svg: winterSvg,
  },
];

export default data;
