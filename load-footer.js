function loadFooter() {
  fetch('footer.html')
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to load footer: ${response.status}`);
      }
      return response.text();
    })
    .then(data => {
      document.getElementById('footer-container').innerHTML = data;
    })
    .catch(error => console.error('Error loading footer:', error));
}

window.addEventListener('DOMContentLoaded', loadFooter);
