//! This file contains code that handles the blogpost viewing page

//query our elements
const titleEl = document.querySelector('.post-title');
const descriptionEl = document.querySelector('.main-desc');

const updatePostHandler = async (event) => {
    event.preventDefault();
    // alert('You clicked update');

    const title = titleEl.value;
    const description = descriptionEl.value;

    if(title.length && description.length) {
        // const id = event.target.getAttribute('data-id');
        const id = document.location.pathname.split("/").at(-1);
        const response = await fetch(`/api/blogpost/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ title, description }),
            headers: { "Content-Type": "application/json" },
        });

        if(response.ok) {
            document.location.replace('/profile');
            alert('Post successfully updated');
        } else {
            alert("Failed to update your post.")
        }
    };
};

const cancelUpdateHandler = async(event) => {
    event.preventDefault();
    document.location.replace('/profile');
};

document.querySelector('.cancel-btn').addEventListener('click', cancelUpdateHandler);
document.querySelector('.update-btn').addEventListener('click', updatePostHandler);