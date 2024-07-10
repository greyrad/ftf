document.addEventListener('DOMContentLoaded', function() {
    const currentPath = window.location.pathname;
    const isLoggedIn = localStorage.getItem('loggedIn') === 'true';

    // Redirection logic
    if (isLoggedIn && (currentPath === '/' || currentPath === '/index.html')) {
        window.location.href = 'dashboard.html';
    } else if (!isLoggedIn && currentPath === '/dashboard.html') {
        window.location.href = 'index.html';
    }

    // Handle login form submission
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = event.target.username.value;
            const password = event.target.password.value;

            // Simple login implementation
            if (username === 'user' && password === 'pass') {
                localStorage.setItem('loggedIn', 'true');
                window.location.href = 'dashboard.html';
            } else {
                alert('Invalid credentials');
            }
        });
    }

    // Handle create password form submission
    const createPasswordForm = document.getElementById('createPasswordForm');
    if (createPasswordForm) {
        createPasswordForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const newPassword = event.target.newPassword.value;
            const confirmPassword = event.target.confirmPassword.value;

            if (newPassword === confirmPassword) {
                alert('Password created successfully');
                window.location.href = 'index.html';
            } else {
                alert('Passwords do not match');
            }
        });
    }
});

function logout() {
    localStorage.removeItem('loggedIn');
    window.location.href = 'index.html';
}
