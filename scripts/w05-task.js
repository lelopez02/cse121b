/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
        const articleElement = document.createElement("article");
        const h3Element = document.createElement("h3");
        h3Element.textContent = temple.templeName;

        const imgElement = document.createElement("img");
        imgElement.src = temple.imageUrl;
        imgElement.alt = temple.location;

        articleElement.appendChild(h3Element);
        articleElement.appendChild(imgElement);
        templesElement.appendChild(articleElement);
    });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    try {
        const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
        templeList = await response.json();
        displayTemples(templeList);
    } catch (error) {
        console.error("Error when obtaining temples:", error);
    }
};

/* reset Function */
const reset = () => {
    templesElement.innerHTML = "";
};

/* filterTemples Function */
const filterTemples = (temples) => {
    reset();
    const filter = document.getElementById("filtered").value;
    switch (filter) {
        case "utah":
            displayTemples(temples.filter(temple => temple.location.toLowerCase().includes("utah")));
            break;
        case "nonutah":
            displayTemples(temples.filter(temple => !temple.location.toLowerCase().includes("utah")));
            break;
        case "old":
            displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;
        default:
            displayTemples(temples);
    }
};

/* Event Listener */
document.getElementById("filtered").addEventListener("change", () => {
    filterTemples(templeList);
});

getTemples();