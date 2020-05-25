class SearchBar extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.querySelector(".search-input").value;
    }

    render() {
        this.innerHTML = `
            <style>
                .form-control:focus {
                    border-color: rgb(255, 255, 255);
                    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgb(255, 255, 255);
                }
            </style>
            
            <div class="input-group my-md-5">
                <input type="text" class="form-control search-input p-lg-4" placeholder="Search...." aria-describedby="button-addon2">
                <div class="input-group-append">
                <button class="btn btn-danger search-btn px-lg-4" type="button" id="button-addon2">
                    <i class="fas fa-search"></i>
                </button>
                </div>
            </div>
        `;

        this.querySelector(".search-btn").addEventListener("click", this._clickEvent);
    }

}

customElements.define("search-bar", SearchBar);