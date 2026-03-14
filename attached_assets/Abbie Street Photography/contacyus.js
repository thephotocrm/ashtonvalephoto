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
  
  document.addEventListener("DOMContentLoaded", function() {
    var iframe = document.getElementById("myiframe");

    // Check if the iframe element exists
    if (iframe) {
        // Add a load event listener to the iframe
        iframe.addEventListener("load", function() {
            // Access iframe contentWindow and document after it's loaded
            if (iframe.contentWindow && iframe.contentWindow.document && iframe.contentWindow.document.body) {
                var contentDocument = iframe.contentWindow.document;
                iframe.width = contentDocument.body.scrollWidth;
                iframe.height = contentDocument.body.scrollHeight;
            } else {
                console.error("Unable to access iframe contentWindow or document");
            }
        });
    } else {
        console.error("Iframe element with ID 'myiframe' not found");
    }
});



function validateForm() {
    var form = document.getElementById("myForm");
    var firstName = form.elements["firstName"].value;
    var lastName = form.elements["lastName"].value;
    var email = form.elements["email"].value;
    var phoneNumber = form.elements["phoneNumber"].value;
    var zipCode = form.elements["zipCode"].value;
    var message = form.elements["message"].value;
    var weddingDate = form.elements["weddingDate"].value;
    var weddingLocation = form.elements["weddingLocation"].value;
    var ceremonyVenue = form.elements["ceremonyVenue"].value;
    var receptionVenue = form.elements["receptionVenue"].value;
    var howDidYouHear = form.elements["howDidYouHear"].value;

    if (firstName === "" || lastName === "" || email === "" || phoneNumber === "" || zipCode === "" || message === "" || weddingDate === "" || weddingLocation === "" || ceremonyVenue === "" || weddingVenue === "" || howDidYouHear === "") {
        alert("Please fill out all fields");
        return false;
    }

    // Additional validation can be added here if needed

    
    return true;
}



  // Get the current date
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
