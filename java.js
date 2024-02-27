function displayComment() {
    var commentInput = document.getElementById("commentInput").value;
    var commentDisplay = document.getElementById("commentDisplay");
    
    // Create a new paragraph element for each comment
    var newComment = document.createElement("p");
    newComment.textContent = commentInput;

    // Append the new comment to the comment display area
    commentDisplay.appendChild(newComment);

    // Clear the input textarea after submitting the comment
    document.getElementById("commentInput").value = "";
}
