document.addEventListener("DOMContentLoaded", function () {
  function startTypedAnimation(selector, strings, typeSpeed = 80, backSpeed = 50, backDelay = 1000, loop = true) {
      new Typed(selector, {
          strings: strings,
          typeSpeed: typeSpeed,
          backSpeed: backSpeed,
          backDelay: backDelay,
          loop: loop,
          showCursor: false
      });
  }

  function observeElement(id, callback) {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver((entries, obs) => {
          if (entries[0].isIntersecting) {
              callback();
              obs.disconnect(); 
          }
      }, { threshold: 0.5 });

      observer.observe(element);
  }

  observeElement("name", () => startTypedAnimation("#name", ["IRAKADA", "izkya Raka Priananda"], 80, 50, 1000, true));
  observeElement("dots", () => startTypedAnimation("#dots", ["..."], 150, 0, 500, false)); 
});
