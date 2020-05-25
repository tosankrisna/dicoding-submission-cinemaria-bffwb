import imageJumbotron from '../../img/jumbotron.jpg';

class HeadJumbotron extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <style>
                .jumbotron {
                    background-image: url("${imageJumbotron}");
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-position: center;
                }

                @media screen and (max-width: 487px) {
                    .jumbotron {
                        height: 250px;
                    }
                
                    .jumbotron .display-4 {
                        margin-top: 30px;
                        font-size: 32px;
                    }
                }
            </style>

            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4 text-white text-center">Cari film favoritmu disini</h1>
                    <search-bar></search-bar>
                </div>
            </div>
        `;
    }

}

customElements.define("head-jumbotron", HeadJumbotron);