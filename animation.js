document.addEventListener("DOMContentLoaded", () => {
  // Observer for regular sections
  const sections = document.querySelectorAll("section");
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        const delay = index * 0.3; // Dynamic delay
        entry.target.style.transitionDelay = `${delay}s`;
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
        entry.target.style.transitionDelay = `0s`;
      }
    });
  });

  sections.forEach((section) => {
    sectionObserver.observe(section);
  });

  // Function to format numbers like "15K" instead of "15000"

  function revealOnScroll() {
    const project1 = document.querySelector(".project1img img");
    const project2 = document.querySelector(".project2img img");
    const project3 = document.querySelector(".project3img img");

    const project1Rect = project1.getBoundingClientRect();
    const project2Rect = project2.getBoundingClientRect();
    const project3Rect = project3.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;

    // Reveal Project 1 first
    if (project1Rect.top < windowHeight * 0.8) {
      project1.classList.add("visible");
    }

    // Only reveal Project 2 if Project 1 is already visible
    if (
      project1.classList.contains("visible") &&
      project2Rect.top < windowHeight * 0.8
    ) {
      project2.classList.add("visible");
    }

    // Only reveal Project 3 if Project 2 is already visible
    if (
      project2.classList.contains("visible") &&
      project3Rect.top < windowHeight * 0.8
    ) {
      project3.classList.add("visible");
    }
  }

  window.addEventListener("scroll", revealOnScroll);
  window.addEventListener("load", revealOnScroll);

  window.addEventListener("load", () => {
    const h1Text = "Welcome!";
    const h2Text = "Experience exceptional services.";

    const h1Element = document.querySelector(".typing-h1");
    const h2Element = document.querySelector(".typing-h2");
    const pdiv = document.querySelector(".pdiv"); // The paragraph div to fly in

    let h1Index = 0;
    let h2Index = 0;

    function typeH1() {
      if (h1Index < h1Text.length) {
        h1Element.innerHTML += h1Text[h1Index];
        h1Index++;
        setTimeout(typeH1, 100); // typing speed for h1
      } else {
        h1Element.classList.remove("blinking-cursor"); // Remove cursor after typing
        setTimeout(() => {
          h2Element.style.display = "inline-block";
          typeH2();
        }, 500); // Pause before typing h2
      }
    }

    function typeH2() {
      if (h2Index < h2Text.length) {
        h2Element.innerHTML += h2Text[h2Index];
        h2Index++;
        setTimeout(typeH2, 50); // typing speed for h2
      } else {
        h2Element.classList.remove("blinking-cursor"); // Remove cursor after typing
        setTimeout(() => {
          pdiv.classList.add("visible"); // Trigger the fly-in
        }, 500); // Short pause before paragraph flies in
      }
    }

    // Setup initial styles
    h1Element.classList.add("blinking-cursor"); // Start h1 with blinking cursor
    h2Element.style.display = "none"; // Hide h2 until it's ready to type
    pdiv.classList.remove("visible"); // Make sure pdiv is hidden initially

    typeH1(); // Start typing sequence
  });
});
