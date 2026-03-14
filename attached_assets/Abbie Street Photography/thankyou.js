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


const reviews = document.querySelectorAll('.review');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentIndex = 0;

function showReview(index) {
    reviews.forEach((review, i) => {
        review.classList.remove('active');
    });
    reviews[index].classList.add('active');
}

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = reviews.length - 1;
    }
    showReview(currentIndex);
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < reviews.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    showReview(currentIndex);
});

// Show the initial review
showReview(currentIndex);

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = reviews.length - 1;
    }
    showReview(currentIndex);
    console.log('Previous button clicked');
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < reviews.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    showReview(currentIndex);
    console.log('Next button clicked');
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
  
