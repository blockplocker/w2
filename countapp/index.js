let count = 0
let counterEl = document.getElementById("counter-el")
let saveEl = document.getElementById("save-el")
let saveCount = 0


function increment() {
    count += 1
    counterEl.textContent = count
}

function save() {
    if (saveCount > 0) {
        countStr = " - " + count
    } else {
        countStr = count
        saveCount += 1
    }
    saveEl.textContent += countStr
    count = 0
    counterEl.textContent = count
}

function reset() {
    let countStr = ""
    saveCount = 0
    count = 0
    counterEl.textContent = count
    saveEl.textContent = "Previous entries: "
}
