const darkMode = () => {
    const themeToggleBtns = document.querySelectorAll("#theme-toggle");
    const circles = document.querySelector(".circles");

    const theme = localStorage.getItem("theme");

    theme && document.body.classList.add(theme);

    const handleThemeToggle = () => {
        document.body.classList.toggle("light-mode");
        if (document.body.classList.contains("light-mode")) {
            circles.style.opacity = "0.1";
            localStorage.setItem("theme", "light-mode");
        } else {
            circles.style.opacity = "0.2";
            localStorage.removeItem("theme");
            document.body.removeAttribute("class");
        }
    };

    themeToggleBtns.forEach(btn =>
        btn.addEventListener("click", handleThemeToggle)
    );
};

export default darkMode;