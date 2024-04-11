import { updateRGB } from "./modules/updateRGB.js";
import { rgb } from "./modules/rgb.js";

/**
 * Create slider and label with eventListener
 * @param {*} number
 */
function createSlider(number) {
    let slider = document.createElement("input");
    let sliderLabel = document.createElement("label");
    sliderLabel.for = number;
    sliderLabel.textContent = number;
    slider.id = number;
    slider.type = "range";
    slider.min = 0;
    slider.max = 255;
    slider.value = 0;
    slider.addEventListener("input", () => {
        render(slider.value, number);
        text.textContent = rgb(r, g, b);
        boll.style.backgroundColor = rgb(r, g, b);
    });
    div.appendChild(sliderLabel);
    div.appendChild(slider);
}

let app = document.querySelector(".app");
let div = document.createElement("div");
let text = document.createElement("p");
let boll = document.createElement("div");

app.appendChild(div);
div.appendChild(boll);
div.appendChild(text);

createSlider("r");
createSlider("g");
createSlider("b");

let r = 0;
let g = 0;
let b = 0;

boll.classList.add("boll");
div.classList.add("container");

function render(value, number) {
    if (number == "r") {
        r = value;
    }
    if (number == "g") {
        g = value;
    }
    if (number == "b") {
        b = value;
    }
    text.textContent = rgb(r, g, b);
    boll.style.backgroundColor = rgb(r, g, b);
}
