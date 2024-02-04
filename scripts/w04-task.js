/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Leandro Lopez",
    photo: "images/image-portal.png",
    favoriteFoods: ["Asado", "Chocolate", "Milanesa"],
    hobbies: ["Soccer", "Board games", "Movies"],
    placesLived: ["Olavarria, Argentina", "Buenos Aires"]
};


myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li')
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

myProfile.hobbies.forEach(hobbi => {
    let li = document.createElement('li')
    li.textContent = hobbi;
    document.querySelector('#hobbies').appendChild(li);
});

/* Populate Profile Object with placesLive objects */

let place = {
    place: "Buenos Aires",
    length: "6 years"

};

myProfile.placesLived.push(place);


/* DOM Manipulation - Output */

/* Name */

let nameprofile = document.createElement("#name")
nameprofile.textContent = myProfile.name;
document.querySelector('name').appendChild(nameprofile);

/* Photo with attributes */
const imageElement = document.createElement("img");
imageElement.setAttribute("src", `${myProfile.photo}`);
imageElement.setAttribute("alt", `Profile image of ${myProfile.name}`);
document.getElementById('#photo').appendChild(imageElement);


/* Favorite Foods List*/

document.querySelector('#favorite-foods').textcontent = myProfile.favoriteFoods;
/* Hobbies List */
document.querySelector('#hobbies').textcontent = myProfile.hobbies;

/* Places Lived DataList */
document.querySelector('#places-lived').textcontent = myProfile.placesLived;