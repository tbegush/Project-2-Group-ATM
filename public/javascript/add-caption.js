async function newFormHandler(event) {
    event.preventDefault();
  
    const user_id = 11;
    const caption_text = document.querySelector('#caption-text-area').value;
  console.log("we captures the caption", caption_text);
    const response = await fetch(`/api/captions`, {
      method: 'POST',
      body: JSON.stringify({
        caption_text,
        user_id
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.submit-caption').addEventListener('submit', newFormHandler);
  
