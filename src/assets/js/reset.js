document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    }, 0);

    localStorage.clear();
    sessionStorage.clear();

    document.querySelectorAll("form").forEach(form => form.reset());
});

window.addEventListener("beforeunload", function () {
    window.scrollTo(0, 0);
});
