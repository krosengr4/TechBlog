//! This file contains code to delete and update blogpost

// Function to delete a post when delete btn is clicked
const deletePostHandler = async (event) => {
    // alert('You clicked delete post btn');

    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');
        
        const response = await fetch(`/api/blogpost/${id}`, {
            method: 'DELETE'
        });
        
        if (response.ok) {
            alert('You have deleted a post');
            document.location.replace('/profile');
        } else {
            alert('Failed to delete. This is not your post!');
        }
    };
};

// function hideElements() {
//     const id = target.getAttribute('data-id');
//     const postId = fetch(`/api/blogpost/${id}`);
//     const userId = fetch(`/api/user/${id}`);
//     const deleteBtn = document.querySelector('.delete-btn');
//     const postLink = document.querySelector('.profile-post-name');

//     if (postId != userId) {
//         deleteBtn.style.display = 'none';
//         postLink.style.display = 'none';
//     }

// };


document.querySelector('.profile-posts').addEventListener('click', deletePostHandler);
// document.querySelector('.newPost-btn').addEventListener('click', newPostHandler);
