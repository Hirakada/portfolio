document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById("start");
    const backButton = document.getElementById("back");
    const startSection = document.querySelector("header");
    const introductionSection = document.getElementById("introduction");
    const introductionSectionContent = document.querySelectorAll(".container");
    console.log(introductionSectionContent);

    function scrollToSection(section) {
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }

    if (startButton) {
        startButton.addEventListener("click", () => scrollToSection(introductionSection));
    }

    if (backButton) {
        backButton.addEventListener("click", () => scrollToSection(startSection));
    }

    if (introductionSection && introductionSectionContent.length > 0 && backButton) {
        const observer = new IntersectionObserver(([entry]) => {
            console.log("IntersectionObserver:", entry.isIntersecting); 

            if (entry.isIntersecting) {
                introductionSectionContent.forEach(container => {
                    container.classList.add("show");
                });
                backButton.classList.add("show");
                backButton.classList.remove("hide");
            } else {
                setTimeout(() => {
                    backButton.classList.add("hide");
                    backButton.classList.remove("show");
                }, 100);
            }
        }, { threshold: 0.2 });

        observer.observe(introductionSection);
    } else {
        console.warn("One or more elements not found in the DOM.");
    }
});
