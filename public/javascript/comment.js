async function captionFormHandler(event) {
  event.preventDefault();

  const caption_text = document.querySelector('textarea[name="caption-body"]').value.trim();
  const post_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  if (caption_text) {
    const response = await fetch('/api/captions', {
      method: 'POST',
      body: JSON.stringify({
        post_id,
        caption_text
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('.caption-form').addEventListener('submit', captionFormHandler);
