async function newCaptionHandler(event) {
  event.preventDefault();

  const caption_text = document.querySelector("#caption-text-area").value;
  const response = await fetch(`/api/captions`, {
    method: "POST",
    body: JSON.stringify({
      caption_text,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".captionForm")
  .addEventListener("submit", newCaptionHandler);
