//! This page contains code to handle loging in and signing up 

// Function for login button for returning user to login on /login page
const loginFormHandler = async (event) => {
    event.preventDefault();
    
    const userName = document.querySelector('#user-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (userName && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ userName, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
};

// Function for signup button for new user to signup on /login page
const signupFormHandler = async (event) => {
    event.preventDefault();

    const userName = document.querySelector('#user-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const name = document.querySelector('#name-signup').value.trim();

    

    if (userName && password && name) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ userName, password, name }),
            headers: { 'Content-Type': 'application/json' },
        })

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        };
    };

    console.log("You clicked signup");

};

// event listeners for login and signup buttons
document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);