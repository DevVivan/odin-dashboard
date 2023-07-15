let toggleButton = document.querySelector('.toggle-button');

const theme = document.querySelector("#theme-link");

toggleButton.addEventListener('click', () => {
    if (theme.getAttribute("href") == "light-theme.css") {
        theme.href = "dark-theme.css";
    } else {
        theme.href = "light-theme.css";
    }
});