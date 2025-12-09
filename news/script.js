const body = document.querySelector('#news-list');

window
  .fetch("news.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    // Devi *restituire* la Promise creata da response.json()
    return response.json(); 
  })

  .then((data) => {
    // *Questo* è il blocco in cui 'data' è l'array/oggetto JSON parsato
    console.log(data); // <-- Stampa finalmente il tuo array [0]

    data.forEach(element => {
      body.innerHTML +=
      `
      <div class="article-card">
        <h1>${element.title}</h1>
        <h2>${element.subtitle}</h2>
        <div class="article-spacing"></div>
        <div class="article-preview-container">
          <div class="article-preview">
            ${element.content.body}
          </div>
          <div class="article-overlay"></div>
        </div>
        <div class="article-uuid">${element.uuid}</div>
      </div>
      `;
    });

    document.querySelectorAll('.article-card').forEach(element => {
      element.addEventListener('click', function() {
        const uuid = element.querySelector('.article-uuid');
        location.href = 'article/?uuid=' + uuid.textContent;
      })
    })
  })
  .catch((error) => {
    console.error("Si è verificato un errore:", error);
  });