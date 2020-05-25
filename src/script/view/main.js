import '../components/movie-list.js';
import '../components/search-bar.js';
import DataSource from "../data/data-source.js";

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const movieListElement = document.querySelector("movie-list");
    const title = document.querySelector(".title");

    const recommendedMovie = async () => {
        title.innerHTML = "Rekomendasi Film";

        try {
            const result = await DataSource.recommendedMovie();
            renderResult(result);
        } catch(message) {
            fallbackResult(message);
        }
    };

    const onButtonSearchClicked = async () => {
        if(searchElement.value) {
            title.innerHTML = "Hasil pencarian";

            try {
                const result = await DataSource.searchMovie(searchElement.value);
                renderResult(result);
            } catch (message) {
                fallbackResult(message);
            }
        } else {
            location.reload();
        }
    };
    
    const renderResult = results => {
        movieListElement.movies= results;
    };

    const fallbackResult = message => {
        movieListElement.renderError(message);
    }

    recommendedMovie();
    searchElement.clickEvent = onButtonSearchClicked;
}

export default main;