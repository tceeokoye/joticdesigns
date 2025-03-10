// header area starts.....................
const staticHeader = document.querySelector(".static-header");
const fixedHeader = document.querySelector(".fixed-header");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  if (scrollY > staticHeader.offsetHeight) {
    fixedHeader.classList.remove("hidden");
    fixedHeader.style.transform = "translateY(0)";
  } else {
    fixedHeader.classList.add("hidden");
    fixedHeader.style.transform = "translateY(-100%)";
  }
});
//header area ends here

// Get the current year
const currentYear = new Date().getFullYear();
  
// Find the span element with the class 'year' and set its text content to the current year
document.querySelector('.year').textContent = currentYear;
const dropbutton = document.querySelectorAll(".dropDownButton");
const dropscreen = document.querySelectorAll(".nav-div");

dropbutton.forEach((button) => {
  button.addEventListener("click", function(event) {
    event.preventDefault();

    dropscreen.forEach((screen) => {
      screen.classList.toggle("active");

      // Get the spans inside the clicked button
      const span1 = button.querySelector(".span1");
      const span2 = button.querySelector(".span2");
      const span3 = button.querySelector(".span3");

      if (screen.classList.contains("active")) {
        // Rotate span1 by 45 degrees
        span1.style.transform = "rotate(45deg)";
        span1.style.top = "12px";
        span1.style.left = "0px";

        // Hide span2
        span2.style.display = "none";

        // Rotate span3 by -45 degrees (or 135 degrees)
        span3.style.transform = "rotate(-45deg)";
        span3.style.top = "12px";
      } else {
        // Reset span1 rotation
        span1.style.transform = "rotate(0deg)";
        span1.style.top = "5px";

        // Show span2
        span2.style.display = "block";

        // Reset span3 rotation
        span3.style.transform = "rotate(0deg)";
        span3.style.top = "78%";
      }
    });
  });
});

const home = document.querySelectorAll(".home");
const about = document.querySelectorAll(".about");
const service = document.querySelectorAll(".services");
const project = document.querySelectorAll(".projects");
const contact = document.querySelectorAll(".contacts");

home.forEach((button) => {
  button.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default behavior (e.g., following a link)
    location.reload(); // Reload the page
  });
});

about.forEach((button) => {
  button.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default behavior (e.g., following a link)

    // Find the "About Us" section by its ID
    const aboutSection = document.getElementById("about-us");

    // Scroll to the "About Us" section smoothly
    aboutSection.scrollIntoView({ behavior: "smooth" });

    // Remove the "active" class from all dropscreen elements
    dropscreen.forEach((screen) => {
      screen.classList.remove("active");
    });

    // Reset the spans inside the dropbutton (optional, if needed)
    dropbutton.forEach((button) => {
      const span1 = button.querySelector(".span1");
      const span2 = button.querySelector(".span2");
      const span3 = button.querySelector(".span3");

      // Reset span1
      span1.style.transform = "rotate(0deg)";
      span1.style.top = "5px";

      // Show span2
      span2.style.display = "block";

      // Reset span3
      span3.style.transform = "rotate(0deg)";
      span3.style.top = "78%";
    });
  });
});


service.forEach((button) => {
  button.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default behavior (e.g., following a link)

    // Find the "About Us" section by its ID
    const aboutSection = document.getElementById("service");

    // Scroll to the "About Us" section smoothly
    aboutSection.scrollIntoView({ behavior: "smooth" });

    // Remove the "active" class from all dropscreen elements
    dropscreen.forEach((screen) => {
      screen.classList.remove("active");
    });

    // Reset the spans inside the dropbutton (optional, if needed)
    dropbutton.forEach((button) => {
      const span1 = button.querySelector(".span1");
      const span2 = button.querySelector(".span2");
      const span3 = button.querySelector(".span3");

      // Reset span1
      span1.style.transform = "rotate(0deg)";
      span1.style.top = "5px";

      // Show span2
      span2.style.display = "block";

      // Reset span3
      span3.style.transform = "rotate(0deg)";
      span3.style.top = "78%";
    });
  });
});


project.forEach((button) => {
  button.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default behavior (e.g., following a link)

    // Find the "About Us" section by its ID
    const aboutSection = document.getElementById("project");

    // Scroll to the "About Us" section smoothly
    aboutSection.scrollIntoView({ behavior: "smooth" });

    // Remove the "active" class from all dropscreen elements
    dropscreen.forEach((screen) => {
      screen.classList.remove("active");
    });

    // Reset the spans inside the dropbutton (optional, if needed)
    dropbutton.forEach((button) => {
      const span1 = button.querySelector(".span1");
      const span2 = button.querySelector(".span2");
      const span3 = button.querySelector(".span3");

      // Reset span1
      span1.style.transform = "rotate(0deg)";
      span1.style.top = "5px";

      // Show span2
      span2.style.display = "block";

      // Reset span3
      span3.style.transform = "rotate(0deg)";
      span3.style.top = "78%";
    });
  });
});

contact.forEach((button) => {
  button.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default behavior (e.g., following a link)

    // Find the "About Us" section by its ID
    const aboutSection = document.getElementById("contacts");

    // Scroll to the "About Us" section smoothly
    aboutSection.scrollIntoView({ behavior: "smooth" });

    // Remove the "active" class from all dropscreen elements
    dropscreen.forEach((screen) => {
      screen.classList.remove("active");
    });

    // Reset the spans inside the dropbutton (optional, if needed)
    dropbutton.forEach((button) => {
      const span1 = button.querySelector(".span1");
      const span2 = button.querySelector(".span2");
      const span3 = button.querySelector(".span3");

      // Reset span1
      span1.style.transform = "rotate(0deg)";
      span1.style.top = "5px";

      // Show span2
      span2.style.display = "block";

      // Reset span3
      span3.style.transform = "rotate(0deg)";
      span3.style.top = "78%";
    });
  });
});
//  function displayPendingUsers(users) {
//   const usersContainer = document.querySelector(".penddingUsers");

//   if (!usersContainer) {
//     console.error("Users container not found!");
//     return;
//   }
document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".boxes");
  const flexboxContainer = document.querySelector(".flexboxes");

  function checkCenterBox() {
      if (window.innerWidth > 950) return; // Exit if not mobile

      let centerX = flexboxContainer.clientWidth / 2; // Get container center

      boxes.forEach(box => {
          let boxRect = box.getBoundingClientRect();
          let boxCenterX = boxRect.left + boxRect.width / 2; // Find box center

          // If box center is near container center, apply scaling
          if (Math.abs(centerX - boxCenterX) < boxRect.width / 2) {
              box.classList.add("active");
          } else {
              box.classList.remove("active");
          }
      });
  }

  // Run function on scroll (Only for mobile)
  flexboxContainer.addEventListener("scroll", checkCenterBox);

  // Run once on page load
  checkCenterBox();
});


document.addEventListener("DOMContentLoaded", () => {
  const cube = document.querySelector(".cube");
  let xRotation = 0;
  let yRotation = 0;
  let currentFace = 0;
  
  function rotateCube() {
      const rotations = [
          [0, 0],      // Front
          [0, 180],    // Back
          [0, 90],     // Right
          [0, -90],    // Left
          [90, 0],     // Top
          [-90, 0]     // Bottom
      ];

      xRotation = rotations[currentFace][0];
      yRotation = rotations[currentFace][1];

      cube.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;

      currentFace = (currentFace + 1) % 6;
  }

  setInterval(rotateCube, 3000);
});



