import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

// Import the functions you need from the SDKs you need
window.onload = function() {
  
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const googleApiKey = secrets.GOOGLE_API_KEY:
  const firebaseConfig = {
    apiKey: googleApiKey,
    authDomain: "corso-di-unity.firebaseapp.com",
    projectId: "corso-di-unity",
    storageBucket: "corso-di-unity.firebasestorage.app",
    messagingSenderId: "387995337831",
    appId: "1:387995337831:web:f1a285590731e8664800c2"
  };

  const loginButton = document.querySelector('.login-btn');
  const loginImageDiv = document.querySelector('.login-btn-image');
  const loginUsername = document.querySelector('.login-btn-username');

  if (localStorage.getItem("email") != null) {
    loginImageDiv.innerHTML = `<img src="${localStorage.getItem('photo_url')}">`;
    loginUsername.innerHTML = `${localStorage.getItem('username')}`;
    loginButton.classList.add('w3-disabled');
  }
  else
  {
    loginButton.addEventListener('click', function() {
        signInWithGooglePopup();
    });
  }

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  function signInWithGooglePopup() {
  signInWithPopup(auth, provider)
    .then((result) => {
      // L'accesso è riuscito. L'oggetto 'result' contiene informazioni sull'utente.
      const user = result.user;
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;
      
      console.log("Accesso con Google riuscito:", user.photoURL);

      localStorage.setItem('username', user.displayName);
      localStorage.setItem('email', user.email);
      localStorage.setItem('photo_url', user.photoURL);

      window.location.href = "";
      
      // Reindirizza l'utente o aggiorna l'UI.
    })
    .catch((error) => {
      // Gestione degli errori.
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);

      console.error("Errore nell'accesso con Google:", errorMessage);
    });
  }
}
