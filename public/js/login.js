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
            document.location.replace('/profile');
        } else {
            alert(response.statusText);
        }
    }
};

const signupFormHandler = async (event) => {
    event.preventDefault();

    console.log("You clicked signup");

};


document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);