if (document.getElementById('my-work-link')) {
  document.getElementById('my-work-link').addEventListener('click', () => {
    document.getElementById('my-work-section').scrollIntoView({behavior: "smooth"})
  })
}

const theme = localStorage.getItem('theme');


theme && document.body.classList.add(theme);

// Function to toggle dark mode
function darkMode() {
  const element = document.body;

  // Toggle the 'dark-mode' class on the body
  element.classList.toggle('dark-mode');

  if (element.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark-mode');
    // Switch to the dark mode image
    document.querySelector('.portfolio-header-image').src = './assets/images/HornTorus(1).png';
  } else {
    localStorage.removeItem('theme');
    // Switch to the light mode image
    document.querySelector('.portfolio-header-image').src = './assets/images/Horntorusblack1.png';
  }
}

// Set the initial image based on the theme
if (theme === 'dark-mode') {
  document.querySelector('.portfolio-header-image').src = './assets/images/HornTorus(1).png';
} else {
  document.querySelector('.portfolio-header-image').src = './assets/images/Horntorusblack1.png';
}