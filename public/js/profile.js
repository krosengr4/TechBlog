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

// Handler for the edit button
const renderUpdatePage = async(event) => {
    // event.preventDefault();
    // alert('EDIT POST');

    const id = event.target.getAttribute('data-id');
    // alert(id);

    const userBlogs = document.querySelector('.profile-posts');
    userBlogs.setAttribute("style", "display: none;");

    const newBlogBtn = document.querySelector('.newPost-btn');
    newBlogBtn.setAttribute("style", "display: none;"); 

    const editForm = document.querySelector('.edit-blog-form');
    editForm.setAttribute("style", "display: block;");
    editForm.setAttribute("data-id", `${id}`);
};

// Handler for update and post button (after edit btn clicked).
const updatePostHandler = async (event) => {
    // event.preventDefault();
    alert('You clicked Update and Save button');

    //query our elements
    const newTitle = document.querySelector('#new-title').value.trim();
    const newDescription = document.querySelector('#new-description').value.trim();

    alert(newTitle);
    // alert(newDescription);

        // if (event.target.getAttribute('data-id')) {
        if (newTitle && newDescription) {
        
            const id = event.target.getAttribute('data-id');
            alert(id);
            
            const response = await fetch(`/api/blogpost/${id}`, {
                method: 'PUT',
                body: JSON.stringify({ name: newTitle, description: newDescription }),
                headers: { "Content-Type": "application/json" } 
            });
            
            if (response.ok) {
                alert('Your post has been updated.');
                document.location.replace('/profile');
            } else {
                alert(`|FAILED TO UPDATE| This is not your post!`);
            }
        };
};

// Handler for cancel button (if user doesn't want to update).
const cancelUpdateHandler = async(event) => {
    event.preventDefault();
    document.location.replace('/profile');
};


// Add event listeners for our buttons
//delete button
document.querySelectorAll('.delete-btn').forEach(function(blogPost) {
    blogPost.addEventListener('click', deletePostHandler);
});

//edit button
document.querySelectorAll('.edit-btn').forEach(function(blogPost) {
    blogPost.addEventListener('click', renderUpdatePage);
});

// edit button
document.querySelector('.cancel-btn').addEventListener('click', cancelUpdateHandler);

// Update and save button
document.querySelector('.update-btn').addEventListener('click', updatePostHandler);




// document.querySelectorAll('.edit-btn').addEventListener('click', renderUpdatePage);
// document.querySelector('.delete-btn').addEventListener('click', deletePostHandler);