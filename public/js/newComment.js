//! File to handle the comment

// const { post } = require("../../controllers/api/postRoutes");

// const commentTextEl = document.querySelector('#comment');

const newCommentHandler = async (event) => {
    // event.preventDefault();
    alert('u click post comment');

    const commentContent = document.querySelector('#comment').value.trim();


    alert(commentContent);
    // alert(commentContent.length);


    // if (commentContent.length === 14) {
    //     alert(commentContent);
    // }

    
    if (commentContent.length > 0) {
        alert(commentContent.length);
        
        // const postId = req.body.params;
        // const postId = document.location.pathname.split("/")[2];


        // alert(req.body.params);
        
        const response = await fetch("/api/comment", {
            method: "POST",
            body: JSON.stringify({ content: commentContent, blogPost_id: 1 }), //! FIX THIS
            headers: { 'Content-Type': 'application/json' },            
        });
        if (response.ok) {
            // document.location.replace(`/profile`);
            document.location.replace(`/blogPost/${req.params.id}`);
        } else {
            alert("Comment could not be saved to the post");
        }
    }
};

// document.querySelector("#postComment").addEventListener("submit", newCommentHandler);
document.querySelector('.new-comment-form').addEventListener('submit', newCommentHandler);


//Executing (default): INSERT INTO `blogPost` (`id`,`name`,`description`,`date_created`,`user_id`) VALUES (DEFAULT,?,?,?,?);