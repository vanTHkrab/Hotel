document.addEventListener('DOMContentLoaded', function() {
    const navContainer = document.getElementById('footer-container');
    
    fetch('components/footer.html')
        .then(response => response.text())
        .then(data => {
            navContainer.innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading navigation:', error);
        });
});
