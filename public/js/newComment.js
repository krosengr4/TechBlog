//! File to handle the comment

const { post } = require("../../controllers/api/postRoutes");

// const { post } = require("../../controllers/api/postRoutes");

// const commentTextEl = document.querySelector('#comment');

const newCommentHandler = async (event) => {
    // event.preventDefault();

    // const commentForm = document.querySelector('.new-comment-form');
    // commentForm.setAttribute("data-id", `${postId}`);
    
    const commentContent = document.querySelector('#comment').value.trim();
    const postId = event.target.getAttribute('data-id');
  


    // const postId = req.body.params;
    
    // const editForm = document.querySelector('.new-comment-form');
    // editForm.setAttribute("data-id", `${postId}`);
    alert(postId);
    
    if (commentContent) {
        
        const response = await fetch(`/api/comment/`, {
            method: "POST",
            body: JSON.stringify({ content: commentContent, blogPost_id: 1 }), //! FIX THIS
            headers: { 'Content-Type': 'application/json' },            
        });
        if (response.ok) {
            // document.location.replace(`/profile`);
            document.location.replace(`/blogPost/${req.params.id}`);
        } else {
            alert("| FAILED TO COMMENT | make sure to be logged into an account!");
        }
    }
};

// document.querySelector('.new-comment-form').addEventListener('submit', newCommentHandler);


// document.querySelector("#postComment").addEventListener("submit", newCommentHandler);
//document.querySelector('.new-comment-form').addEventListener('submit', newCommentHandler);

document.querySelector('.post-comment').addEventListener('click', newCommentHandler);



//Executing (default): INSERT INTO `blogPost` (`id`,`name`,`description`,`date_created`,`user_id`) VALUES (DEFAULT,?,?,?,?);

        // const postId = document.location.pathname.split("/")[2];

