import get from "./getElement.js";
import { showLoading, hideLoading } from "./toggleLoading.js";

const displayDrinks = ({ drinks }) => {
    const section = get(".section-center");
    const title = get(".title");
    if (!drinks) {
        // hide loading
        hideLoading();
        // splay error message
        title.textContent = "Sorry, no drinks matched your search";
        section.innerHTML = null;
        return;
    }
    const newDrinks = drinks
        .map((drink) => {
            const { idDrink: id, strDrink: name, strDrinkThumb: image } = drink;

            return `<a href="drink.html">
            <article class="cocktail" data-id="${id}">
                <img src="${image}" alt="cocktail" />
                <h3>${name}</h3>
            </article>
        </a>`;
        })
        .join("");
    // hide loading
    hideLoading();

    // delete error msg
    title.textContent = "";
    // display the drinks
    section.innerHTML = newDrinks;
    return section;
};

export default displayDrinks;
