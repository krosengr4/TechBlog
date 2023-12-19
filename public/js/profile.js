// const newPostHandler = async (event) => {
//     alert('You clicked new post btn');
//     event.preventDefault();

//     document.location.replace('/newPost');
// };

const deletePostHandler = async (event) => {

    // alert('You clicked delete post btn');

    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/blogpost/${id}`, {
            method: 'DELETE'
        });
        
        if (response.ok) {
            document.location.replace('/profile');
            alert('You have deleted a character');
        } else {
            alert('Failed to delete a character');
        }
    };
};





// document.querySelector('.newPost-btn').addEventListener('click', newPostHandler);

document.querySelector('.post-list').addEventListener('click', deletePostHandler);