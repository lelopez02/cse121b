/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Leandro Lopez";
let currentYear = '2024';
let profilePicture = 'images/image-portal.png';

/* Step 3 - Element Variables */

const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("image");

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.innerHTML = `<strong>${currentYear}</strong>`;

//imageElement.setAttribute("src", `${profilePicture}`);
//imageElement.setAttribute("alt", `Profile image of ${fullName}`);



/* Step 5 - Array */

var favFood = ['Asado','Milanesa'];

foodElement.innerHTML += `<br>${favFood}`;

var newFood = ['Asado','Milanesa', 'cheese cake'];

foodElement.innerHTML += `<br>${newFood}`;

var newFood = ['Asado','Milanesa', 'cheese cake', 'pizza', ];

foodElement.innerHTML += `<br>${newFood}`;

var newFood = ['Asado','Milanesa', 'cheese cake', 'pizza', 'Ice cream'];

foodElement.innerHTML += `<br>${newFood}`;

var newFood = ['Asado','Milanesa', 'cheese cake', 'pizza', 'Ice cream', 'Empanadas'];

foodElement.innerHTML += `<br>${newFood}`;

var newFood = ['Asado','Milanesa', 'cheese cake', 'pizza', 'Ice cream', 'Empanadas', 'Choripan'];

foodElement.innerHTML += `<br>${newFood}`;

var newFood = ['Asado','Milanesa', 'cheese cake', 'pizza', 'Ice cream', 'Empanadas', 'Choripan', 'Gnocchi'];

foodElement.innerHTML += `<br>${newFood}`;

favFood.push(newFood);

console.log(favFood);


