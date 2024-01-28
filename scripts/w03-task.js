/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

function add(number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    var add1Value = parseFloat(document.getElementById('add1').value);
    var add2Value = parseFloat(document.getElementById('add2').value);

    var result = add(add1Value, add2Value);

    document.getElementById('sum').value = result;
}

var subtract = function(number1, number2) {
    return number1 - number2;
};

var subtractNumbers = function() {
    var subtract1Value = document.getElementById('subtract1').value;
    var subtract2Value = document.getElementById('subtract2').value;

    var result = subtract(subtract1Value, subtract2Value);

    document.getElementById('difference').value = result;
};
/* Arrow Function - Multiply Numbers */

const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    var factor1Value = document.getElementById('factor1').value;
    var factor2Value = document.getElementById('factor2').value;

    var result = multiply(factor1Value, factor2Value);

    document.getElementById('product').value = result;
};

/* Open Function Use - Divide Numbers */

function divide(number1, number2) {
    return number1 / number2;
}

function divideNumbers() {
    var dividendValue = document.getElementById('dividend').value;
    var divisorValue = document.getElementById('divisor').value;

    var result = divide(dividendValue, divisorValue);

    document.getElementById('quotient').value = result;
}

document.getElementById('addNumbers').addEventListener('click', addNumbers);

document.getElementById('subtractNumbers').addEventListener('click', subtractNumbers);

document.getElementById('multiplyNumbers').addEventListener('click', multiplyNumbers);

document.getElementById('divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */

document.getElementById('getTotal').addEventListener('click', function() {
    var subtotal = parseFloat(document.getElementById('subtotal').value);
    var applyDiscount = document.getElementById('membershipCheckbox').checked;

    if (applyDiscount) {
        subtotal *= 0.8;
    }

    document.getElementById('total').innerText = `Total: $${subtotal.toFixed(2)}`;
});


/* ARRAY METHODS - Functional Programming */

var numberArray = Array.from({ length: 13 }, (_, index) => index + 1);

/* Output Source Array */
document.getElementById('array').innerText = numberArray;

/* Output Odds Only Array */
document.getElementById('odds').innerText = numberArray.filter(num => num % 2 !== 0);


/* Output Evens Only Array */
document.getElementById('evens').innerText = numberArray.filter(num => num % 2 === 0);


/* Output Sum of Org. Array */
document.getElementById('sumOfArray').innerText = numberArray.reduce((acc, num) => acc + num, 0);


/* Output Multiplied by 2 Array */
document.getElementById('multiplied').innerText = numberArray.map(num => num * 2);


/* Output Sum of Multiplied by 2 Array */
document.getElementById('sumOfMultiplied').innerText = numberArray.map(num => num * 2).reduce((acc, num) => acc + num, 0);

