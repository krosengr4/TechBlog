//! This file contains absolutely nothing anymore :(





// Handler for the cancel button (after edit btn clicked).
// const cancelUpdateHandler = async(event) => {
    // event.preventDefault();
    // document.location.replace('/profile');
// };

// document.querySelector('.cancel-btn').addEventListener('click', cancelUpdateHandler);

// document.querySelector('.update-btn').addEventListener('click', updatePostHandler);

// document.querySelectorAll('.edit-btn').addEventListener('click', updatePostHandler);

// document.querySelector('.profile-posts').addEventListener('click', deletePostHandler);







// const updatePostHandler = async (event) => {
//     // event.preventDefault();

//     alert('You clicked Update and Post button');

//     //query our elements
//     const titleVal = document.querySelector('.post-title').value.trim();
//     const descriptionVal = document.querySelector('.main-desc').value.trim();

//     alert(titleVal);
//     alert(descriptionVal);
    
//     const id = event.target.getAttribute('data-id');

//     if(titleVal && descriptionVal) {
//         // const id = document.location.pathname.split("/").at(-1);
//         const response = await fetch(`/api/blogPost/${id}`, {
//             method: 'PUT',
//             body: JSON.stringify({ titleVal, descriptionVal }),
//             headers: { "Content-Type": "application/json" },
//         });

//         if(response.ok) {
//             document.location.replace('/profile');
//             alert('Post successfully updated');
//         } else {
//             alert("Failed to update your post.")
//         };
//     };
// };