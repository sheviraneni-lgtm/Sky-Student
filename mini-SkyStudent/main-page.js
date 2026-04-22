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

        if (postContent.textContent === "") {
            alert("isi bego");
            postList.removeChild(postContainer);
        }
    })