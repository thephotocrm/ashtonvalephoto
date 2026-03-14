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
  
  const date = new Date();
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const currentMonth = monthNames[date.getMonth()];
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

  // Define the sale name for each month
  const saleNames = {
    "January": "New Years Sale",
    "February": "Valentines Sale",
    "March": "Spring Sale",
    "April": "Commemorate Sale",
    "May": "Cinco De Mayo Sale",
    "June": "Summer Sale",
    "July": "Summer Sale",
    "August": "End of Summer Sale",
    "September": "Fall Sale",
    "October": "Lovers Sale",
    "November": "Winter Sale",
    "December": "Holiday Sale"
  };
  const currentSaleName = saleNames[currentMonth];

  // Update the placeholders with the current month, last day, and sale name
  document.getElementById("current-month").textContent = currentMonth;
  document.getElementById("last-day").textContent = lastDay;
  document.getElementById("sale-name").textContent = currentSaleName;