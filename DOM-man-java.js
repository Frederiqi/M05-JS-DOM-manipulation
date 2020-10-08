//deel 1: elementen toevoegen aan de DOM
const buttons = document.querySelectorAll(".big-five-button");

const spottedAnimalsList = document.getElementById("spotted-animals-list");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const newLiSpottedAnimals = document.createElement("li");

        spottedAnimalsList.appendChild(newLiSpottedAnimals);

        newLiSpottedAnimals.innerHTML = `${button.innerHTML}`;
    })
});



//deel 2: het vervolg - elementen verwijderen uit de DOM
const buttonRemove1st = document.getElementById("remove-first-item-button");

buttonRemove1st.addEventListener("click", () => {
    const childAnimalsList = spottedAnimalsList.getElementsByTagName("li")[0];

    spottedAnimalsList.removeChild(childAnimalsList);
});


//deel 3: Meerdere elementen verwijderen uit de DOM
const buttonRemoveAll = document.getElementById("remove-all-button");

buttonRemoveAll.addEventListener("click", () => {
    let allAnimalsList = document.getElementById("spotted-animals-list");
    while (allAnimalsList.firstChild) {
        allAnimalsList.removeChild(allAnimalsList.firstChild);
    }
});


