document.addEventListener('DOMContentLoaded', function() {
    const navContainer = document.getElementById('nav-container');
    
    fetch('./components/nav.html')
        .then(response => response.text())
        .then(data => {
            navContainer.innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading navigation:', error);
        });
});
