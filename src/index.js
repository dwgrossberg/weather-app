import "./style.css";
import favicon from "./assets/favicon.ico";
import displayController from "./ui.js";

// Set favicon
document.querySelector('[type="image/x-icon"]').href = favicon;

// Set third-party cookies
document.cookie = "SameSite=Lax";

displayController;
