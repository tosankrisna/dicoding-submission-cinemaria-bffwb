class DataSource {

    static recommendedMovie() {
        return fetch("https://api.themoviedb.org/3/movie/popular?api_key=c7aa52e6430f0b08ed6264fe6a6b7717&language=en-US&page=1")
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if(responseJson.results) {
                    return Promise.resolve(responseJson.results);
                } else {
                    return Promise.reject("error");
                }
            })
    };

    static searchMovie(keyword) {
        return fetch(`https://api.themoviedb.org/3/search/movie?api_key=c7aa52e6430f0b08ed6264fe6a6b7717&language=en-US&query=${keyword}&page=1&include_adult=false`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if(responseJson.results.length > 0) {
                    return Promise.resolve(responseJson.results);
                } else {
                    return Promise.reject(`Maaf, ${keyword} tidak ditemukan`);
                }
            })
    };

    static detailMovie(id) {
        return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=c7aa52e6430f0b08ed6264fe6a6b7717&language=en-US`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if(responseJson) {
                    return Promise.resolve(responseJson);
                } else {
                    return Promise.reject(`error`);
                }
            })
    }
}

export default DataSource;
