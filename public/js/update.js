//! This file contains code that handles the blogpost viewing page

const updatePostHandler = async (event) => {
    event.preventDefault();
    // alert('You clicked update');

    //query our elements
    const title = document.querySelector('.post-title').value.trim();
    const description = document.querySelector('.main-desc').value.trim();

    const id = event.target.getAttribute('data-id');

    if(title && description) {
        // const id = document.location.pathname.split("/").at(-1);
        const response = await fetch(`/api/blogPost/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ title, description }),
            headers: { "Content-Type": "application/json" },
        });

        if(response.ok) {
            document.location.replace('/profile');
            alert('Post successfully updated');
        } else {
            alert("Failed to update your post.")
        };
    };
};

const cancelUpdateHandler = async(event) => {
    event.preventDefault();
    document.location.replace('/profile');
};

document.querySelector('.cancel-btn').addEventListener('click', cancelUpdateHandler);
document.querySelector('.update-btn').addEventListener('click', updatePostHandler);