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
    var form = document.getElementById("corporateForm");
    var firstName = form.elements["firstName"].value;
    var lastName = form.elements["lastName"].value;
    var email = form.elements["email"].value;
    var phoneNumber = form.elements["phoneNumber"].value;
    var zipCode = form.elements["zipCode"].value;
    var message = form.elements["message"].value;
    var weddingDate = form.elements["weddingDate"].value;
    var weddingLocation = form.elements["weddingLocation"].value;
    var howDidYouHear = form.elements["howDidYouHear"].value;

    if (firstName === "" || lastName === "" || email === "" || phoneNumber === "" || zipCode === "" || message === "" || weddingDate === "" || weddingLocation === "" || howDidYouHear === "") {
        alert("Please fill out all fields");
        return false;
    }

    // Additional validation can be added here if needed

    redirectToPage();
    return true;
}

function redirectToPage() {
    // Redirect to a different page
    window.location.href = 'thankyou.html'; // Replace 'success.html' with the URL of your success page
}