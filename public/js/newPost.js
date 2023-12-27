//! This file contains code to create a new blogpost

// Function to create to post when new post btn clicked
const newPostHandler = async (event) => {
    // alert('You clicked the button for new post');
    
    const blogTitle = document.querySelector('#post-title').value.trim();
    const blogDescription = document.querySelector('#post-desc').value.trim();

    console.log('blogName: ', blogTitle);
    console.log('blogDescription: ', blogDescription);
   
    if (blogTitle && blogDescription) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/blogPost', { //! <--- Could be "BlogPost"
        method: 'POST',
        body: JSON.stringify({ name: blogTitle, description: blogDescription }),
        headers: { 'Content-Type': 'application/json' },
      });

      if(response.ok) {
        document.location.replace('/profile');
        alert("Post successfully created!");
      } else {
        alert(response.statusText);
      }
    };
};

document.querySelector('.new-post-form').addEventListener('submit', newPostHandler);