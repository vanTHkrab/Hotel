document.addEventListener('DOMContentLoaded', function() {
    const scriptContainer = document.getElementById('script-func');
    
    fetch('components/script.html')
        .then(response => response.text())
        .then(data => {
            scriptContainer.innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading navigation:', error);
        });
});
