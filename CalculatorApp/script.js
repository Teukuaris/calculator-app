// Get the display element
const display = document.getElementById('display');

// Append number or operator to display
function insertValue(value) {
    if (display.innerText === '0') {
        display.innerText = value; // Replace '0' if it's the first input
    } else {
        display.innerText += value;
    }
}

// Clear the entire display
function clearDisplay() {
    display.innerText = '0';
}

// Delete the last character from display
function deleteLast() {
    if (display.innerText.length > 1) {
        display.innerText = display.innerText.slice(0, -1);
    } else {
        display.innerText = '0';
    }
}

// Insert operator and handle chaining correctly
function insertOperator(operator) {
    const lastChar = display.innerText.slice(-1);

    // Prevent double operators
    if ("+-*/".includes(lastChar)) {
        display.innerText = display.innerText.slice(0, -1) + operator;
    } else {
        display.innerText += operator;
    }
}

// Calculate the result of the expression
function calculateResult() {
    try {
        // Use eval to calculate, with safety to prevent invalid expressions
        const result = eval(display.innerText);
        
        if (result === Infinity || result === -Infinity) {
            display.innerText = "Error";
        } else {
            display.innerText = result;
        }
    } catch (error) {
        display.innerText = "Error"; // Display error for invalid expressions
    }
}

// Toggle between light and dark themes
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}
