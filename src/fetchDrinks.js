import { showLoading, hideLoading } from "./toggleLoading.js";

const fetchDrinks = async (url) => {
    showLoading();

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Error while fetching. Fetch not fulfilled");
        }

        const data = response.json();
        return data;
    } catch (error) {
        console.log(error);
    }

    return "culito";
};

export default fetchDrinks;
