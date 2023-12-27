//! File to handle the comment

// const { post } = require("../../controllers/api/postRoutes");

// const commentTextEl = document.querySelector('#comment');

const newCommentHandler = async (event) => {
    // event.preventDefault();
    alert('u click post comment');

    const commentContent = document.querySelector('#comment').value.trim();


    alert(commentContent);

    if ( commentContent.length > 0 ) {
        const postId = req.body.params;

        alert(postId);
        // const postId = document.location.pathname.split("/")[2];
        
        const response = await fetch("/api/comment", {
            method: "POST",
            body: JSON.stringify({ content: commentContent, blogPost_id: postId }),
            headers: { "Content-Type": "application/json" },
        });
        if (response.ok) {
            document.location.replace(`/profile`);
            // document.location.replace(`/blogPost/${req.params.id}`);
        } else {
            alert("Comment could not be saved to the post");
        }
    }
};

// document.querySelector("#postComment").addEventListener("submit", newCommentHandler);
document.querySelector('.new-comment-form').addEventListener('submit', newCommentHandler);