const newPostHandler = async (event) => {
  event.preventDefault();

  const topic = document.querySelector("#post-topic").value.trim();
  const postText = document.querySelector("#post-text").value.trim();

  if (topic && postText) {
    const response = await fetch(`/api/posts`, {
      method: "POST",
      body: JSON.stringify({ topic, postText }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(`Couldn't create post`);
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/post/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(`Couldn't Delete post`);
    }
  }
};

document
  .querySelector(".new-post-form")
  .addEventListener("submit", newPostHandler);

document
  .querySelector(".post-list")
  .addEventListener("click", delButtonHandler);
