const sections = Array.from(document.getElementsByTagName("section"));
const links = Array.from(document.getElementsByClassName("link"));



const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && entry.target.tagName == "SECTION") {
            links.forEach(link => {
                if (link.getAttribute("href").substring(1) == entry.target.id) {
                    console.log(entry.target.id);
                    link.classList.add("active");
                }
                else {
                    link.classList.remove("active");
                }
            });
        }
    });
}, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5
});

sections.forEach(element => {
    observer.observe(element);
});