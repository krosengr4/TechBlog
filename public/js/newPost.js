const newPostHandler = async (event) => {
    alert('You clicked the button for new post');
    
    const blogTitle = document.querySelector('#post-title').value.trim();
    const blogDescription = document.querySelector('#post-desc').value.trim();

    alert(blogTitle);
    console.log(blogTitle);
    alert(blogDescription);
    console.log(blogDescription); 
   
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