import "../styles/modern-normalize.css";
import '../styles/style.css';
import "../styles/components/header.css";
import "../styles/components/hero.css";
import "../styles/components/about.css";
import "../styles/components/featured.css";
import "../styles/components/work.css";
import "../styles/components/contact.css";
import "../styles/components/footer.css";
import "../styles/components/mobile-nav.css";
import "../styles/components/modal.css";
import "../styles/components/background-circles.css";
import "../styles/utils.css";

import mobileNav from "./utils/mobile-nav";
import darkMode from "./utils/dark-mode";
import lazyLoading from "./utils/lazy-loading";
import modal from "./utils/modal";
import circleFollow from "./utils/circles";

document.addEventListener("DOMContentLoaded", () => {
    const theme = localStorage.getItem("theme");
    const imageWrappers = document.querySelectorAll(".featured__img-wrapper");
    const workImageWrappers = document.querySelectorAll(".work__img-wrapper");

    if (theme === "light-mode") {
        for (const imageWrapper of imageWrappers) {
            imageWrapper.classList.remove("featured__img-wrapper")
        }
        for (const workImageWrapper of workImageWrappers) {
            workImageWrapper.classList.remove("work__img-wrapper")
        }
    }
});


mobileNav();
darkMode();
lazyLoading();
modal();
circleFollow();