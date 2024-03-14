console.log("index.js loaded");

/**
 * hämta ett skämt från chuck norris api
 */

function getJoke() {
    // get a joke from the chuck norris api
    fetch("https://api.chucknorris.io/jokes/random")
        .then((response) => {
            // check if the response is ok
            if (!response.ok) {
                // throw an error
                throw new error("server returned " + response.status);
            }
            // return the json object
            console.log("response", response);
            return response.json();
        })
        // display the error
        .catch((error) => {
            console.log(error);
        });
}

/**
 * make a html element with a class
 * @param {*} type
 * @param {*} klass
 * @returns
 */
function makeElement(type, klass) {
    // create an element
    let el = document.createElement(type);
    //add the class to the element
    el.classList.add(klass);
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
jokeButton.textcontent = "Get a joke";

// get a joke and display it when the page loads
let joke = getJoke();
jokeText.textContent = joke;
// get a joke and display it when the button is clicked
jokeButton.addEventListener("click", function () {
    joke = getJoke();
    jokeText.textContent = joke;
});
