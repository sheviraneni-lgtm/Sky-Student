    const postInput = document.getElementById("post-input");
    const postButton = document.getElementById("post-button");
    const postList = document.querySelector(".post-list");

    postButton.addEventListener("click", function() {
        const postContainer = document.createElement("div");
        postContainer.classList.add("post-container");
        postList.appendChild(postContainer);

        const postContent = document.createElement("p");
        postContent.textContent = postInput.value.trim();
        postContainer.appendChild(postContent);
        postInput.value = "";

        //dummy interact buttons
        //post interact variables
        const interactButtons = document.createElement("ul");
        const upVote = document.createElement("li");
        const downVote = document.createElement("li");
        const comment = document.createElement("li");
        //interact buttons
        upVote.textContent = ("Up vote");
        downVote.textContent = ("Down vote");
        comment.textContent = ("Komentar");
        //appendchild
        postContainer.appendChild(interactButtons);
        interactButtons.appendChild(upVote);
        interactButtons.appendChild(downVote);
        interactButtons.appendChild(comment);

        if (postContent.textContent === "") {
            postList.removeChild(postContainer);
        }
    });

    //enter support
    postInput.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            postButton.click();
            event.preventDefault();
        }
    });