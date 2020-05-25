import webLogo from "../../img/logo.png";

class AppBar extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <nav class="navbar navbar-dark bg-dark">
                <a class="navbar-brand mx-auto" href="#">
                <img src="${webLogo}" width="200" class="d-inline-block" alt="">
                </a>
            </nav>
        `;
    }
}

customElements.define("app-bar", AppBar);