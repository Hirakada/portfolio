document.addEventListener("DOMContentLoaded", function () {
    const backButton = document.getElementById("back");
    const firstSection = document.getElementById("first");

    window.addEventListener("scroll", function () {
        const firstSectionPosition = firstSection.getBoundingClientRect();
        const isPastFirstSection = firstSectionPosition.bottom < 0;

        if (isPastFirstSection) {
            backButton.classList.add("show");
            backButton.classList.remove("hide");
        } else {
            backButton.classList.add("hide");
            backButton.classList.remove("show");
        }
    });
});