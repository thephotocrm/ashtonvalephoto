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
    fetch('public/posts.json')
    .then(response => response.json())
    .then(data => {
      posts = data;
      // Display posts by specific tags
      displayPostsByTag('Wedding', 'wedding-container');
      displayPostsByTag('Engagement', 'engagement-container');
      displayPostsByTag('General', 'general-container');
    })
    .catch(error => console.error('Error loading posts:', error));
  
  function displayPostsByTag(tag, containerId) {
    const filteredPosts = posts.filter(post => post.tags.includes(tag));
    displayPosts(filteredPosts, containerId);
  }
  
  function displayPosts(posts, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    // Create HTML for each post and append to the container
    posts.forEach(post => {
      const postElement = document.createElement('div');
      postElement.classList.add('post');
  
      const titleLink = document.createElement('a');
      titleLink.href = post.file;
      titleLink.classList.add('post-link');
  
      const imageElement = document.createElement('img');
      imageElement.classList.add('post-cover');
      imageElement.src = post.coverImage;
      imageElement.alt = `Cover image for ${post.title}`;
      titleLink.appendChild(imageElement);
  
      const infoElement = document.createElement('div');
      infoElement.classList.add('post-info');
  
      const dateElement = document.createElement('div');
      dateElement.classList.add('post-date');
      dateElement.textContent = new Date(post.date).toLocaleDateString();
      infoElement.appendChild(dateElement);
  
      const titleElement = document.createElement('h2');
      titleElement.classList.add('post-title');
      titleElement.textContent = post.title;
      infoElement.appendChild(titleElement);
  
      const readMoreParagraph = document.createElement('p');
      readMoreParagraph.textContent = 'Read More';
      readMoreParagraph.classList.add('read-more');
      infoElement.appendChild(readMoreParagraph);
  
      titleLink.appendChild(infoElement);
  
      postElement.appendChild(titleLink);
  
      container.appendChild(postElement);
    });
  }
  });
  