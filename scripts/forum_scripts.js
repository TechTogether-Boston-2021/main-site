console.log("I'm alive!")

const commentBox = document.querySelector(".add_comment_container")

const showCommentBox = function () {
    commentBox.classList.toggle('show-me');
}