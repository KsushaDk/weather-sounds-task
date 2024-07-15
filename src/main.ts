import pauseSvg from "../public/assets/icons/pause.svg";
import data from "./const/data";

import { price, totalPrice } from "./ts-tasks/ts-task-1";
import { posts, normalizeData } from "./ts-tasks/ts-task-2";
import { COMMENTS_URL, getData } from "./ts-tasks/ts-task-3";

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

// Task 1
console.log("totalPrice", totalPrice(price));

// Task 2export
console.log("normalizeData", normalizeData(posts));

// Task 3
getData(COMMENTS_URL).then((data) => {
  if (data && data.length) {
    data.forEach((comment) => {
      console.log(`ID: ${comment.id}, Email: ${comment.email}`);
    });
  }
});
