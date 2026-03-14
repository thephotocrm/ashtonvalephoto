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

const viewDetailsButtons = document.querySelectorAll('.viewdetails, .viewdetails5');
const popups = document.querySelectorAll('.popup');

viewDetailsButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    popups[index].classList.add('active');
    const popupWrapper = popups[index].closest('.popup-wrapper');
    popupWrapper.classList.add('active');
    document.body.classList.add('popup-active');
  });
});

const closeButtons = document.querySelectorAll('.close-popup');

closeButtons.forEach(closeButton => {
  closeButton.addEventListener('click', () => {
    const popup = closeButton.closest('.popup');
    const popupWrapper = popup.closest('.popup-wrapper');
    popup.classList.remove('active');
    popupWrapper.classList.remove('active');
    document.body.classList.remove('popup-active');
  });
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
  
  
  document.addEventListener('DOMContentLoaded', function() {
    // Get the current date
    const date = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const currentMonth = monthNames[date.getMonth()];
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

    // Function to update the text of elements with specific classes
    function updatePlaceholders(monthClass, dayClass) {
        // Find all elements with the provided classes and update their text
        document.querySelectorAll(`.${monthClass}`).forEach(element => {
            element.textContent = currentMonth;
        });

        document.querySelectorAll(`.${dayClass}`).forEach(element => {
            element.textContent = lastDay;
        });
    }

    // Call the function to update all placeholders with the desired classes
    updatePlaceholders("current-month", "last-day");
});

