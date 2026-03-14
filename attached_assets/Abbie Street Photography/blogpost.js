// Scroll event listener for header and menu section
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const menusection = document.querySelector('.menusection');
    if (window.scrollY > 0) {
      header.classList.add('scrolled');
      menusection.classList.add('whitetext');
    } else {
      header.classList.remove('scrolled');
      menusection.classList.remove('whitetext');
    }
  });
  
  // DOMContentLoaded event listener for menu and blog posts
  document.addEventListener('DOMContentLoaded', function() {
    // Menu related variables and functions
    const hamburgerButton = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobilemenu');
    const closeButton = document.querySelector('.close-button');
    const body = document.querySelector('body');
  
    // Function to open the mobile menu
    function openMobileMenu() {
      mobileMenu.classList.add('active');
      body.classList.add('noscroll');
    }
  
    // Function to close the mobile menu
    function closeMobileMenu() {
      mobileMenu.classList.remove('active');
      body.classList.remove('noscroll');
    }
  
    // Event listeners for menu open/close
    hamburgerButton.addEventListener('click', openMobileMenu);
    closeButton.addEventListener('click', closeMobileMenu);
  
    // Blog posts related variables and functions
    let posts = [];
  
    // Fetch the list of posts from the posts.json file
   
  });
  
    fetch('/public/posts.json')
      .then(response => response.json())
      .then(posts => {
        const currentFile = window.location.pathname.split('/').pop().toLowerCase() + '.html'; // Convert to lowercase and add .html extension
        const post = posts.find(post => post.file.toLowerCase().endsWith(currentFile)); // Convert to lowercase for comparison
        if (post) {
          const tagsContainer = document.querySelector('.post-tags');
          post.tags.forEach(tag => {
            const tagElement = document.createElement('h3');
            tagElement.classList.add('post-tag');
            tagElement.textContent = tag;
            tagsContainer.appendChild(tagElement);
          });
        }
      })
      .catch(error => console.error('Error loading post:', error));
      
 
  