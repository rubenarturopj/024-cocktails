const setDrink = (section) => {
    section.addEventListener("click", function (event) {
        // event.preventDefault();
        const id = event.target.parentElement.dataset.id;
        localStorage.setItem("drink", id);
    });
};

export default setDrink;
