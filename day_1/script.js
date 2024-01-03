// Selecting elements from the HTML document using their respective class names.
const count = document.querySelector('.count');  // Represents the element that displays the count value.
const add = document.querySelector('.add');      // Represents the button for incrementing the count.
const subtract = document.querySelector('.subtract'); // Represents the button for decrementing the count.
const reset = document.querySelector('.reset');  // Represents the button for resetting the count to zero.

// Event listener for the 'add' button: Increases the count by 1 when clicked.
add.addEventListener('click', () => {
    count.innerHTML++;  // Incrementing the count value by 1.
    changeColor();      // Calling the changeColor function to update the color based on the count value.
});

// Event listener for the 'subtract' button: Decreases the count by 1 when clicked.
subtract.addEventListener('click', () => {
    count.innerHTML--;  // Decrementing the count value by 1.
    changeColor();      // Calling the changeColor function to update the color based on the count value.
});

// Event listener for the 'reset' button: Resets the count value to 0 when clicked.
reset.addEventListener('click', () => {
    count.innerHTML = 0;  // Setting the count value to 0.
    changeColor();        // Calling the changeColor function to update the color based on the count value.
});

// Function to change the color of the count display based on its value.
function changeColor() {
    if (count.innerHTML < 0) {          // If the count is less than 0, set the color to yellow.
        count.style.color = "yellow";
    } else if (count.innerHTML > 0) {   // If the count is greater than 0, set the color to red.
        count.style.color = "red";
    } else {                            // If the count is 0, set the color to white.
        count.style.color = "white";
    }
}
