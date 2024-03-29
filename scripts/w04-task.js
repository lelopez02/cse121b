/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {};

myProfile.name = "Leandro Lopez";

myProfile.photo = 'images/image-portal.png';

myProfile.favoriteFoods = ["Pizza", "Milanesa", "Ice cream", "Asado", "Flan", "Chocolat Volcano"];

myProfile.hobbies = ["Reading", "Soccer", "Movies"];

/* Populate Profile Object with placesLive objects */

myProfile.placesLived = [];

myProfile.placesLived.push({
    place: "Olavarria",
    length: "21 years"
});

myProfile.placesLived.push({
    place: "Buenos Aires",
    length: "6 years"
});
/* DOM Manipulation - Output */

/* Name */

document.getElementById("name").textContent = myProfile.name;

/* Photo with attributes */

document.getElementById("photo").src = myProfile.photo;

document.getElementById("photo").alt = myProfile.name;

/* Favorite Foods List*/

myProfile.favoriteFoods.forEach(food => {

    let li = document.createElement("li");

    li.textContent = food;

    document.getElementById("favorite-foods").appendChild(li);
});

/* Hobbies List */

myProfile.hobbies.forEach(hobby => {
    let li = document.createElement("li");
    li.textContent = hobby;
    document.getElementById("hobbies").appendChild(li);
});

/* Places Lived DataList */

myProfile.placesLived.forEach(place => {

    let dt = document.createElement("dt");

    dt.textContent = place.place;

    let dd = document.createElement("dd");

    dd.textContent = place.length;

    document.getElementById("places-lived").appendChild(dt);
    document.getElementById("places-lived").appendChild(dd);
});