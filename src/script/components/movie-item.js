import DataSource from "../data/data-source.js";

class MovieItem extends HTMLElement {

    set movie(movie) {
        this._movie = movie;
        this.render();
    }

    render() {
        this.setAttribute("class", "col mb-5");
        this.innerHTML = `
            <style>
                .card {
                    border-color: unset;
                    min-height: 430px;
                    max-height: 500px;
                }

                .card .card-title {
                    font-size: 18px;
                    overflow: hidden;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                }
                
                .card img {
                    height: 250px;
                    background-position: center;
                    object-fit: cover;
                }

                .btn a {
                    text-decoration: none;
                    color: #fff;
                }

                .list-group li{
                    border: none;
                }
            </style>

            <div class="card">
                <img src="http://image.tmdb.org/t/p/w500/${this._movie.poster_path}" class="card-img-top" alt="${this._movie.title}">
                <div class="card-body">
                    <h5 class="card-title">${this._movie.title}</h5>
                    <p>${(this._movie.release_date).substr(0,4)}</p>
                    <button class="btn detail-btn btn-danger" data-toggle="modal" data-target="#exampleModalCenter" data-id="${this._movie.id}">Detail</button>
                </div>
            </div>

            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalCenterTitle">Detail Film</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="container-fluid">
                            <div class="col">
                                <img src="" class="img-fluid" width=500>
                            </div>
                            <div class="col">
                                <ul class="list-group">
                                    <li class="list-group-item title-movie"></li>
                                    <li class="list-group-item release-movie"></li>
                                    <li class="list-group-item runtime-movie"></li>
                                    <li class="list-group-item desc-movie"></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-dismiss="modal">Tutup</button>
                    </div>
                    </div>
                </div>
            </div>
        `;

        const detailMovie = async (id) => {
            try {
                const result = await DataSource.detailMovie(id);
                renderResult(result);
            } catch (message) {
                fallbackResult(message)
            }
        }

        const renderResult = result => {
            $(".img-fluid").attr("src", "http://image.tmdb.org/t/p/w500/" + result.backdrop_path);
            $(".title-movie").html("Judul : " + result.original_title);
            $(".release-movie").html("Tahun : " + (result.release_date).substr(0,4));
            $(".runtime-movie").html("Durasi : " + result.runtime + " min");
            $(".desc-movie").html("Deskripsi : " + result.overview);
        }

        const fallbackResult = message => {
            alert(message);
        };

        const detailBtn = this.querySelector(".detail-btn");
        detailBtn.addEventListener("click", function() {
            const movieId = this.getAttribute("data-id");
            detailMovie(movieId);
        });

    }

}

customElements.define("movie-item", MovieItem);