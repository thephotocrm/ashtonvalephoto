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

    redirectToPage();
    return true;
}

function redirectToPage() {
    // Redirect to a different page
    window.location.href = 'thankyou.html'; // Replace 'success.html' with the URL of your success page
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

