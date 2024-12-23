document.addEventListener("DOMContentLoaded", () => {
    const scroll = document.querySelector(".gallery");
    const nextBtn = document.getElementById("nextBtn");
    const backBtn = document.getElementById("backBtn");
  
    if (!scroll || !nextBtn || !backBtn) {
      console.error("One or more elements not found!");
      return;
    }
  
    // Mouse wheel scrolling
    scroll.addEventListener("wheel", (evt) => {
      evt.preventDefault();
      scroll.scrollLeft += evt.deltaY;
      scroll.style.scrollBehavior = "auto"; // Smooth behavior reset
    });
  
    // Next button functionality
    nextBtn.addEventListener("click", () => {
      scroll.style.scrollBehavior = "smooth";
      scroll.scrollLeft += 900; // Adjust scroll distance as needed
    });
  
    // Back button functionality
    backBtn.addEventListener("click", () => {
      scroll.style.scrollBehavior = "smooth";
      scroll.scrollLeft -= 900; // Adjust scroll distance as needed
    });
  });
  