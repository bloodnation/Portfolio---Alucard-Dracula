// Dark Mode Toggle with localStorage
const toggleDarkMode = document.getElementById('toggle-dark-mode');
const body = document.body;

toggleDarkMode.addEventListener('change', () => {
    body.classList.toggle('dark-mode');
    localStorage.setItem('dark-mode', body.classList.contains('dark-mode'));
});

if (localStorage.getItem('dark-mode') === 'true') {
    body.classList.add('dark-mode');
    toggleDarkMode.checked = true;
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
    alert('Thank you for your message!');
    this.reset();
});