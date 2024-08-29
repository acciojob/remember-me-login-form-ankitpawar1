//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const existingBtn = document.getElementById('existing');

    // Check if there are saved login details
    displayExistingUserButton();

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const rememberMe = document.getElementById('checkbox').checked;

        if (rememberMe) {
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
        } else {
            localStorage.removeItem('username');
            localStorage.removeItem('password');
        }

        alert(`Logged in as ${username}`);
        displayExistingUserButton();
    });

    existingBtn.addEventListener('click', function() {
        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');

        if (storedUsername && storedPassword) {
            alert(`Logged in as ${storedUsername}`);
        }
    });

    function displayExistingUserButton() {
        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');

        if (storedUsername && storedPassword) {
            existingBtn.style.display = 'block';
        } else {
            existingBtn.style.display = 'none';
        }
    }
});