const darkMode = () => {
    const themeToggleBtns = document.querySelectorAll("#theme-toggle");
    const circles = document.querySelector(".circles");
    const imageWrappers = document.querySelectorAll(".featured__img-wrapper");
    const workImageWrappers = document.querySelectorAll(".work__img-wrapper");

    const theme = localStorage.getItem("theme");

    theme && document.body.classList.add(theme);

    const handleThemeToggle = () => {
        document.body.classList.toggle("light-mode");
        if (document.body.classList.contains("light-mode")) {
            for (const imageWrapper of imageWrappers) {
                imageWrapper.classList.remove("featured__img-wrapper");
            }
            for (const workImageWrapper of workImageWrappers) {
                workImageWrapper.classList.remove("work__img-wrapper");
            }
            circles.style.opacity = "0.1";
            localStorage.setItem("theme", "light-mode");
        } else {
            circles.style.opacity = "0.2";
            localStorage.removeItem("theme");
            for (const imageWrapper of imageWrappers) {
                imageWrapper.classList.add("featured__img-wrapper")
            }
            for (const workImageWrapper of workImageWrappers) {
                workImageWrapper.classList.add("work__img-wrapper");
            }
            document.body.removeAttribute("class");
        }
    };

    themeToggleBtns.forEach(btn =>
        btn.addEventListener("click", handleThemeToggle)
    );
};

export default darkMode;