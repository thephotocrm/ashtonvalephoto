window.addEventListener("scroll", function() {
    const header = document.querySelector(".header");
    const menusection = document.querySelector(".menusection");
    if (window.scrollY > 0) {
        header.classList.add("scrolled");
        menusection.classList.add("whitetext");
    } else {
        header.classList.remove("scrolled");
        menusection.classList.remove("whitetext");

    }
});





document.addEventListener("DOMContentLoaded", function() {
    const hamburgerButton = document.querySelector(".hamburger");
    const mobileMenu = document.querySelector(".mobilemenu");
    const closeButton = document.querySelector(".close-button");
    const body = document.querySelector("body");
  
    // Function to open the mobile menu
    function openMobileMenu() {
      mobileMenu.classList.add("active");
      body.classList.add("noscroll");
    }
  
    // Function to close the mobile menu
    function closeMobileMenu() {
      mobileMenu.classList.remove("active");
      body.classList.remove("noscroll");
    }
  
    // Event listener for hamburger button click
    hamburgerButton.addEventListener("click", openMobileMenu);
  
    // Event listener for close button click
    closeButton.addEventListener("click", closeMobileMenu);
  });
  

