import pauseSvg from "../public/assets/icons/pause.svg";
import data from "./const/data";

import "./style.scss";

import { AudioMap, ImageMap } from "./types/weatherTypes";

const containerElement = document.querySelector(".container") as HTMLDivElement;
const controlsElement = document.querySelector(
  ".container__controls"
) as HTMLDivElement;
const volumeControl = document.getElementById(
  "volume-control"
) as HTMLInputElement;

let currentSound: HTMLAudioElement | null = null;

document.addEventListener("DOMContentLoaded", () => {
  const audioMap: AudioMap = {};
  const defaultImgMap: ImageMap = {};

  data.forEach((item) => {
    const { mode, sound, bg, svg } = item;

    audioMap[mode] = new Audio(sound);
    audioMap[mode].volume = +volumeControl.value;

    const button = document.createElement("button");
    button.className = "container__controls_item";
    button.style.backgroundImage = `url(${bg})`;

    const img = document.createElement("img");
    img.src = svg;
    img.alt = `${mode} icon`;
    img.width = 36;
    img.height = 36;

    button.appendChild(img);
    controlsElement.appendChild(button);

    defaultImgMap[mode] = svg;

    function resetButtonImg() {
      Object.keys(audioMap).forEach((key) => {
        if (key !== mode) {
          const buttonImg = controlsElement.querySelector(
            `[alt="${key} icon"]`
          ) as HTMLImageElement;
          if (buttonImg) {
            buttonImg.src = defaultImgMap[key];
          }
        }
      });
    }

    button.addEventListener("click", () => {
      containerElement.style.backgroundImage = `url(${bg})`;

      if (currentSound && currentSound !== audioMap[mode]) {
        resetButtonImg();
        currentSound.pause();
        currentSound.currentTime = 0;
      }

      if (currentSound === audioMap[mode]) {
        if (currentSound.paused) {
          img.src = pauseSvg;
          currentSound.play();
        } else {
          currentSound.pause();
          img.src = svg;
        }
      } else {
        currentSound = audioMap[mode];
        img.src = pauseSvg;
        currentSound?.play();
      }
    });
  });
});

volumeControl.addEventListener("input", () => {
  if (currentSound) {
    currentSound.volume = +volumeControl.value;
  }
});
