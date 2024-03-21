console.log("index.js loaded");

/**
 * hämta ett skämt från chuck norris api
 */

function getJoke() {
    // get a joke from the chuck norris api
    return (
        fetch("https://api.chucknorris.io/jokes/random")
            .then((response) => {
                // check if the response is ok
                if (!response.ok) {
                    // throw an error
                    throw new error("server returned " + response.status);
                }
                // return the json object
                return response.json();
            })
            .then((data) => {
                // console.log("data", data.value);
                return data.value;
            })
            // display the error
            .catch((error) => {
                console.log(error);
            })
    );
}

/**
 * make a html element with a class
 * @param {*} type
 * @param {*} klass
 * @returns
 */
function makeElement(type, klass = null, text = null) {
    // create an element
    let el = document.createElement(type);
    //add the class to the element
    el.className = klass;
    //add the text to the element
    el.textContent = text;
    //return the created element
    return el;
}

// create elements
let app = document.getElementById("app");
let wrapper = makeElement("div", "wrapper");
let jokeButton = makeElement("button", "jokeButton");
let jokeText = makeElement("p", "jokeText");

// append elements to the app div
app.appendChild(wrapper);
wrapper.appendChild(jokeButton);
wrapper.appendChild(jokeText);

// set the text of the button
jokeButton.textContent = "Get a joke";
// get a joke and display it when the page loads
// let joke = getJoke();
// jokeText.textContent = joke;

var x = null;
getJoke().then((data) => {
    console.log("A", data);
    x = data;
});
console.log("X", x);
jokeText.textContent = x;
console.log(getJoke());

// get a joke and display it when the button is clicked
jokeButton.addEventListener("click", function () {
    joke = getJoke();
    jokeText.textContent = joke;
});
