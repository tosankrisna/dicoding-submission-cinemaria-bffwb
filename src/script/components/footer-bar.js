class FooterBar extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <style>
                @media screen and (max-width: 487px) {
                    .copyright {
                        font-size: 14px;
                    }
                }
            </style>

            <div class="bg-dark py-4">
                <div class="container">
                <div class="row">
                    <div class="col text-white">Dicoding Submission &#9400 2020</div>
                    <div class="col">
                    <button id="btnScroll" class="btn btn-light float-right"><i class="fas fa-arrow-up"></i></button>
                    </div>
                </div>
                </div>
            </div>
        `;

        $("#btnScroll").click(function() {
            $("html, body").animate({
            scrollTop: 0
            }, 500);
        })
    }

}

customElements.define("footer-bar", FooterBar);