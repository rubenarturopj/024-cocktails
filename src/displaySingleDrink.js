import get from "./getElement.js";
import { showLoading, hideLoading } from "./toggleLoading.js";

const displayDrink = (data) => {
    hideLoading();
    const drink = data.drinks[0];
    const {
        // desctructiring the prop
        strDrinkThumb: image,
        strDrink: name,
        strInstructions: desc,
    } = drink;
    // ingredients taken from the fetched file
    const list = [
        drink.strIngredient1,
        drink.strIngredient2,
        drink.strIngredient3,
        drink.strIngredient4,
        drink.strIngredient5,
        drink.strIngredient6,
        drink.strIngredient7,
        drink.strIngredient8,
    ];

    const img = get(".drink-img");
    const drinkName = get(".drink-name");
    const description = get(".drink-desc");
    const ingredients = get(".drink-ingredients");

    // to change the title of the tab *********************************
    document.title = name;
    // end of changing the title of the tab *********************************

    img.src = image;
    drinkName.textContent = name;
    description.textContent = desc;
    ingredients.innerHTML = list
        .map((item) => {
            if (!item) return;
            return `<li><i class="far fa-check-square"></i>${item}</li>`;
        })
        .join("");
};

export default displayDrink;
