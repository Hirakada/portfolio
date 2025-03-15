document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    }, 0);

    localStorage.clear();
    sessionStorage.clear();

    // document.querySelectorAll("form").forEach(form => form.reset());
});
