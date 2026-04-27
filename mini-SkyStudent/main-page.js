    const postInput = document.getElementById("post-input");
    const postButton = document.getElementById("post-button");
    const postList = document.querySelector(".post-list");

    postButton.addEventListener("click", function() {
        const postContainer = document.createElement("div");
        postContainer.classList.add("post-container");
        postList.appendChild(postContainer);

        //dummy user
        const username = document.createElement("h3");
        username.textContent = "dummy_user";
        postContainer.appendChild(username);

        const postContent = document.createElement("p");
        postContent.textContent = postInput.value.trim();
        postContainer.appendChild(postContent);
        postInput.value = "";

        //dummy interact buttons
        //post interact variables
        const interactButtons = document.createElement("ul");
        const upVote = document.createElement("li");
        const comment = document.createElement("li");
        const share = document.createElement("li");
        const save = document.createElement("li");
        //interact buttons
        upVote.classList.add("fa-regular", "fa-heart");
        comment.classList.add("fa-regular", "fa-comment");
        share.classList.add("fa-regular", "fa-share-from-square");
        save.classList.add("fa-regular", "fa-bookmark");
        //appendchild
        postContainer.appendChild(interactButtons);
        interactButtons.appendChild(upVote);
        interactButtons.appendChild(comment);
        interactButtons.appendChild(share);
        interactButtons.appendChild(save);

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