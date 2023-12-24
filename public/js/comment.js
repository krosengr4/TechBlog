//! File to handle the comment

// const { post } = require("../../controllers/api/postRoutes");

// const commentTextEl = document.querySelector('#comment');

newCommentHandler = async (event) => {
    event.preventDefault();
    alert('u click post');

    const content = document.querySelector('#comment').value.trim();

    if ( content ) {
        // const post_id = document.location.pathname.split("/")[2];
        const response = await fetch("/api/comment/", {
            method: "POST",
            body: JSON.stringify({ content }),
            headers: { "Content-Type": "application/json" },
        });
        if (response.ok) {
            document.location.replace('/homepage');
        } else {
            alert("Comment could not be saved to the post");
        }
    }
};

// document.querySelector("#postComment").addEventListener("submit", newCommentHandler);
document.querySelector('.new-comment-form').addEventListener('submit', newCommentHandler);