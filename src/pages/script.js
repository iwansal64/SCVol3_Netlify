const about_button = document.getElementsByClassName("about")[0];
const competition_button = document.getElementsByClassName("competitions")[0];
const back_buttons = Array.from(document.getElementsByClassName("back"));

const homepage_section = document.getElementsByClassName("homepage")[0];
const about_us_section = document.getElementsByClassName("about-us")[0];
const competition_section = document.getElementsByClassName("competition")[0];

about_button.addEventListener("click", e => {
    about_us_section.classList.add("active");
    homepage_section.classList.remove("active");
});

competition_button.addEventListener("click", e => {
    competition_section.classList.add("active");
    homepage_section.classList.remove("active");
});

back_buttons.forEach(element => {
    element.addEventListener("click", e => {
        about_us_section.classList.remove("active");
        competition_section.classList.remove("active");
        homepage_section.classList.add("active");
    });
});
