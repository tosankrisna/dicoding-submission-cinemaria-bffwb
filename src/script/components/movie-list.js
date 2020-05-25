import './movie-item.js';

class MovieList extends HTMLElement {

    set movies(movies) {
        this._movies = movies;
        this.render();
    }
    
    render() {
        this.innerHTML = "";
        this.setAttribute("class", "movie-list row row-cols-1 row-cols-lg-4 row-cols-md-3");
        this._movies.forEach(movie => {
            const movieItemElement = document.createElement("movie-item");
            movieItemElement.movie = movie;
            this.appendChild(movieItemElement);
        })
    }

    renderError(message) {
        this.innerHTML = "";
        this.setAttribute("class", "text-center mt-5");
        this.innerHTML += `<h5>${message}</h5>`;
    }


}

customElements.define("movie-list", MovieList);