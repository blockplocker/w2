let app = document.querySelector('.app');
let div = document.createElement('div');
let text = document.createElement('p');
app.appendChild(div);
div.appendChild(text);

let boll = document.createElement('div');
boll.classList.add('boll');
div.appendChild(boll);


function createSlider(number){
    let slider = document.createElement('input');
    let sliderLabel = document.createElement('label');
    sliderLabel.for = number;
    sliderLabel.textContent = number;
    slider.id = number;
    slider.type = 'range';
    slider.min = 0;
    slider.max = 255;
    slider.value = 0;
    slider.addEventListener('input', () => {
        render(slider.value ,number)
    })
    div.appendChild(slider);
    div.appendChild(sliderLabel);
}

function updateBoll(){
    boll.style.backgroundColor = "rgb("+r+", "+g+", "+b+")"
}

createSlider("r")
createSlider("g")
createSlider("b")
let r = 0;
let g = 0;
let b = 0;

function render(value, number){
    if (number == "r") {
        r = value
    } if (number == "g") {
        g = value
    } if (number == "b") {
        b = value
    }
    text.textContent = "rgb("+r+", "+g+", "+b+")";
    updateBoll();
}