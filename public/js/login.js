const loginFormHandler = async (event) => {
    event.preventDefault();
    
    const userName = document.querySelector('#user-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    // alert(userName);
    // alert(password);
    // let x = JSON.stringify({ userName, password });
    // alert(x);

    if (userName && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ userName, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert(response.status);
        }
    }
};

const signupFormHandler = async (event) => {
    event.preventDefault();

    // alert('you clicked sign in');

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
            document.location.replace('/profile');
        } else {
            alert(response.statusText);
        };
    };

    console.log("You clicked signup");

};


document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);