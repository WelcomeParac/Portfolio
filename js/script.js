if (document.getElementById('my-work-link')) {
  document.getElementById('my-work-link').addEventListener('click', () => {
    document.getElementById('my-work-section').scrollIntoView({behavior: "smooth"})
  })
}

const theme = localStorage.getItem('theme');


theme && document.body.classList.add(theme);

function darkMode(){

  let element = document.body; {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark-mode');
    } else {
      localStorage.removeItem('theme');
    }
  };
  
  
}
