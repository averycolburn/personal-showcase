function loadTopNav() {
  fetch('common-elements.html')
    .then(response => response.text())
    .then(data => {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = data;

      const topNav = tempDiv.querySelector('#topnav');
      if (topNav && document.getElementById('topnav-container')) {
        document.getElementById('topnav-container').innerHTML = topNav.innerHTML;
        
        document.getElementById('topnav-container').classList.add('topnav');
        
        highlightActiveNav();
      }
    })
    .catch(error => console.error('Error loading top navigation:', error));
}


function highlightActiveNav() {
  const page = window.location.pathname.split('/').pop();
  const navLinks = {
    'home-page.html': 'nav-home',
    'about-me.html': 'nav-me',
    'campus.html': 'nav-campus',
    'experience.html': 'nav-experience'
  };

  if (navLinks[page]) {
    document.getElementById(navLinks[page]).classList.add('active');
  }
}


function loadFooter() {
    fetch('common-elements.html')
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to load footer: ${response.status}`);
        }
        return response.text();
      })
      .then(data => {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = data;
  
        const footer = tempDiv.querySelector('#footer');
        if (footer && document.getElementById('footer-container')) {
          document.getElementById('footer-container').innerHTML = footer.innerHTML;
        }
      })
      .catch(error => console.error('Error loading footer:', error));
}
  
window.addEventListener('DOMContentLoaded', () => {
    loadFooter();
    loadTopNav();
});
