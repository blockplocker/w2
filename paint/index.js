let canvas = document.getElementById("paint");
let context = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight - 140;

// window.addEventListener("resize", () => {
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight - 140;
// });

let currentColor = "#ff0000";
context.strokeStyle = "#ff0000";
context.lineWidth = 10;
context.lineCap = "round";
context.lineJoin = "round";
let sliderValue = document.querySelector(".slider-value");
sliderValue.style.height = context.lineWidth + "px";
sliderValue.style.width = context.lineWidth + "px";
sliderValue.style.background = context.strokeStyle;

function randomColor() {
    let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
}
let colorArray = [];
colorArray = [
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor(),
];

let randomColor1 = document.getElementById("random-color");
randomColor1.addEventListener("click", (event) => {
    currentColor = randomColor();
    colorPicker.value = currentColor;
    sliderValue.style.background = context.strokeStyle;
});

let sizeSlider = document.getElementById("size-slider");
sizeSlider.oninput = function () {
    context.lineWidth = this.value;
    sliderValue.style.height = context.lineWidth + "px";
    sliderValue.style.width = context.lineWidth + "px";
};
let eraser = document.getElementById("eraser");
eraser.addEventListener("click", (event) => {
    currentColor = "white";
    sliderValue.style.background = context.strokeStyle;
});
let clear = document.getElementById("clear");
clear.addEventListener("click", (event) => {
    context.clearRect(0, 0, canvas.width, canvas.height);
});
let colorPicker = document.getElementById("color-picker");
colorPicker.oninput = function () {
    currentColor = this.value;
    sliderValue.style.background = context.strokeStyle;
};
let colors = document.querySelectorAll(".color");
for (let i = 0; i < colorArray.length; i++) {
    colors[i].style.background = colorArray[i];
}
colors.forEach((colors, index) => {
    colors.addEventListener("click", () => {
        console.log(colorArray[index]);
        currentColor = colorArray[index];
        colorPicker.value = currentColor;
    });
});

let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(e) {
    if (!isDrawing) {
        return;
    }
    context.strokeStyle = currentColor;
    context.beginPath();
    context.moveTo(lastX, lastY);
    context.lineTo(e.offsetX, e.offsetY);
    context.stroke();
    lastX = e.offsetX;
    lastY = e.offsetY;

    if (colorArray[0] == currentColor) {
        console.log("same color");
    } else {
        // for (let index = 0; index < array.length; index++) {
        //     const element = array[index];
        //     colorArray.pop(currentColor);
        // }
        colorArray.unshift(currentColor);

        // let unique = [];
        // DataTransfer.forEach((element) => {
        //     if (!unique.includes(element)) {
        //         unique.push(element);
        //     }
        // });
        // colorArray = unique;

        for (let i = 0; i < colorArray.length; i++) {
            colors[i].style.background = colorArray[i];
        }
        colorPicker.value = currentColor;
    }
}

canvas.addEventListener("mousedown", (e) => {
    isDrawing = true;
    lastX = e.offsetX;
    lastY = e.offsetY;
});
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => (isDrawing = false));
