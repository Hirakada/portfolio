document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById("start");
    const backButton = document.getElementById("back");
    const startSection = document.querySelector("header");
    const introductionSection = document.getElementById("introduction");

    function scrollToSection(section) {
        section.scrollIntoView({ behavior: "smooth" });
    }

    startButton.addEventListener("click", () => scrollToSection(introductionSection));
    backButton.addEventListener("click", () => scrollToSection(startSection));

    const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
            backButton.classList.add("show");
            backButton.classList.remove("hide");
        } else {
            setTimeout(() => {
                backButton.classList.add("hide");
                backButton.classList.remove("show");
            }, 100); 
        }
    }, { threshold: 0.5 });

    observer.observe(introductionSection);
});
