// functions for the app
const count = document.querySelector ('.count')

const add = document.querySelector ('.add')

const subtract = document.querySelector ('.subtract')

const reset = document.querySelector('.reset')

// add function
add.addEventListener ('click', () => {
    count.innerHTML++;
    changeColor();
});
// subtract function
subtract.addEventListener('click', () => {
    count.innerHTML--;
    changeColor;
});
//reset function
reset.addEventListener('click', () => {
    count.innerHTML = 0;
    changeColor;
});
function changeColor() {
    if (count.innerHTML < 0) {
        count.style.color = "yellow";
    } else if (count.innerHTML > 0) {
        // here we can change the color of element by using (element.style.color = "colorname");
        count.style.color = "red";
    } else {
        count.style.color = "white";
    }
}
