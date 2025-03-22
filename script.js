// Dark Mode Toggle with localStorage
const toggleDarkMode = document.getElementById('toggle-dark-mode');
const body = document.body;

// Function to set the theme based on system preference or localStorage
function setTheme() {
    const savedTheme = localStorage.getItem('dark-mode');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'true' || (savedTheme === null && systemPrefersDark)) {
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
        if (toggleDarkMode) toggleDarkMode.checked = true;
    } else {
        body.classList.add('light-mode');
        body.classList.remove('dark-mode');
        if (toggleDarkMode) toggleDarkMode.checked = false;
    }
}

// Set the theme on page load
setTheme();

// Toggle dark mode
if (toggleDarkMode) {
    toggleDarkMode.addEventListener('change', () => {
        body.classList.toggle('dark-mode');
        body.classList.toggle('light-mode');
        localStorage.setItem('dark-mode', body.classList.contains('dark-mode'));
    });
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    fetch('/submit-form', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        alert('Thank you for your message!');
        this.reset();
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error submitting your message. Please try again.');
    });
});