/**
 * Updates the color of the ball and the text in response to a change in the slider.
 * @param {*} value
 * @param {*} number
 * @param {*} r
 * @param {*} g
 * @param {*} b
 *
 */
export function updateRGB(value, number, r, g, b) {
    if (number == "r") {
        r = value;
    }
    if (number == "g") {
        g = value;
    }
    if (number == "b") {
        b = value;
    }
    return r, g, b;
}
