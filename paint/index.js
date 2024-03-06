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

// context.fillStyle = "black";
// context.fillRect(0, 0, canvas.width, canvas.height);
// // 绘制直线
// context.beginPath();
// context.moveTo(100, 100);
// context.lineTo(200, 200);
// context.lineTo(300, 100);
// context.lineTo(400, 200);
// context.lineTo(500, 100);
// context.lineTo(600, 200);
// context.lineTo(700, 100);
// context.lineTo(800, 200);
// context.stroke();
// // 绘制圆形
// drawCircle(500, 500, 100);
// function drawCircle(x, y, radius) {
//     context.beginPath();
//     context.arc(x, y, radius, 0, Math.PI * 2);
//     context.stroke();
// }
// // 绘制文字
// context.font = "bold 50px Arial";
// context.fillStyle = "white";
// context.fillText("Hello World", 100, 100);
// // 绘制图片
// let image = new Image();
// image.src = "https://upload.wikimedia.org/wikipedia/commons/2/2b/Microsoft_Paint.svg";
// image.onload = function() {
//     context.drawImage(image, 0, 0, 100, 100);
// }
// // 绘制贝塞尔曲线
// context.beginPath();
// context.moveTo(100, 100);
// context.bezierCurveTo(200, 200, 300, 100, 400, 200);
// context.stroke();
// // 绘制二次贝塞尔曲线
// context.beginPath();
// context.moveTo(100, 100);
// context.quadraticCurveTo(200, 200, 300, 100);
// context.stroke();
// // 绘制渐变
// let gradient = context.createLinearGradient(0, 0, 800, 0);
// gradient.addColorStop(0, "red");
// gradient.addColorStop(0.5, "yellow");
// gradient.addColorStop(1, "blue");
// context.fillStyle = gradient;
// context.fillRect(0, 0, 800, 600);
// // 绘制阴影
// context.shadowOffsetX = 10;
// context.shadowOffsetY = 10;
// context.shadowBlur = 5;
// context.shadowColor = "rgba(0, 0, 0, 0.5)";
// context.fillRect(100, 100, 200, 200);

// context.putImageData(imageData, 0, 0);
// let imageData = context.getImageData(0, 0, 800, 600);
// let canvas2 = document.createElement('canvas');
// let ctx2 = canvas2.getContext('2d');
// ctx2.drawImage(document.getElementById('img'), 0, 0);
// let imgData = ctx2.getImageData(0, 0, 500, 500);
// context.clearRect(0, 0, 800, 600);
// context.putImageData(imgData, 50, 50);
// // 绘制图像像素（区域）
// let srcData = context.getImageData(0, 0, 800, 600);
// let destData = context.createImageData(100, 100);
// destData.data.set(srcData.data);
// context.putImageData(destData, 700, 700);
// // 绘制图像像素（区域）复制
// let x=300, y=300, width=100, height=100;
// let desX=700, desY=700;
// context.clearRect(desX, desY, width, height);
// context.drawImage(context.canvas, x, y, width, height, desX, desY, width, height);
