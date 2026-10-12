// Apparition des éléments lors du scroll

const hiddenElements = document.querySelectorAll(
    ".card, .project-card, .page h1, .page p"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

});

hiddenElements.forEach((el) => observer.observe(el));
