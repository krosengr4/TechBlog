//! This file contains code to delete and update blogpost

const deletePostHandler = async (event) => {
    
    // alert('You clicked delete post btn');
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');
        
        const response = await fetch(`/api/blogpost/${id}`, {
            method: 'DELETE'
        });
        
        if (response.ok) {
            document.location.replace('/profile');
            alert('You have deleted a post');
        } else {
            alert('Failed to delete a character');
        }
    };
};







document.querySelector('.profile-posts').addEventListener('click', deletePostHandler);
// document.querySelector('.newPost-btn').addEventListener('click', newPostHandler);





// function hideElements() {
    // const postLink = document.querySelector('.profile-post-name');
    // const deleteBtn = document.querySelector('.delete-btn');
    // const userId = req.session.user_id;
    // const blogPostData = req.session.blogPost_id
    
    // if (userId != blogPostData) {
        //     postLink.style.display = 'none';
        //     deleteBtn.style.display = 'none';
        // }
        // };
        
        
        
        // const newPostHandler = async (event) => {
            //     alert('You clicked new post btn');
            //     event.preventDefault();
            
            //     document.location.replace('/newPost');
            // };




        

