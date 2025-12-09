const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const uuid = urlParams.get('uuid')
console.log(uuid);

window
  .fetch("../news.json")
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
        if (element.uuid == uuid)
        {
            document.title = "Unity News | " + element.title;
            document.querySelector('body h1').textContent = element.content.title;
            document.querySelector('body #article-card').innerHTML = element.content.body;
        }
    });
  })
  .catch((error) => {
    console.error("Si è verificato un errore:", error);
  });