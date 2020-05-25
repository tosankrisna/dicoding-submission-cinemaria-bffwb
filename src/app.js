import "regenerator-runtime";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/js/all.js";
import "./style/style.css";

import "./script/components/app-bar.js";
import "./script/components/head-jumbotron.js";
import "./script/components/footer-bar";
import main from "./script/view/main.js";

document.addEventListener("DOMContentLoaded", main);