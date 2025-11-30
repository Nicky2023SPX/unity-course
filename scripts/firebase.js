 import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithRedirect, getRedirectResult, setPersistence, browserLocalPersistence } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

const ownerEmail = {
    "uid": "RPGaGx4KjdR8UYJ2E7sH9CRwfci2",
    "email": "solonikko23@gmail.com",
    "emailVerified": true,
    "displayName": "Nikko",
    "isAnonymous": false,
    "photoURL": "https://lh3.googleusercontent.com/a/ACg8ocJbByb6wsOpYm78pUUuArEwEC_SulMTXG35Vm0DIpm0nHo3g790=s96-c",
    "providerData": [
        {
            "providerId": "google.com",
            "uid": "107801675898790282177",
            "displayName": "Nikko",
            "email": "solonikko23@gmail.com",
            "phoneNumber": null,
            "photoURL": "https://lh3.googleusercontent.com/a/ACg8ocJbByb6wsOpYm78pUUuArEwEC_SulMTXG35Vm0DIpm0nHo3g790=s96-c"
        }
    ],
    "stsTokenManager": {
        "refreshToken": "AMf-vBzo5lx9td9qEAXfpUrXpnOoFm5s9nrsdxAD5IPeAhC26YXurBCcMjpNRW4PxmEGx2avpu8pXChUSfiUibjc6zwYwoVpGH8-MPz4o9j5aNMdX-3Qv5FLGotbK1xLQNGhdpwQAk5mg2DcKSMKjqz0kUs7Hpgf3WHZlqnGif-dar0hEGZELzUi-kide-w1P2tbSssqEWiswgByQzNYpphkQSQGR0ak9Mgk20232VnhO2fqY3rN_QWxC72SL0ckc4tC5iCevUV1UAvkqAIUJMldzQ_0mszYpW3yFw2gkkuP85FW7NqmuU1a20g5C_-ReWhyFS2Q2ttM240YMkJZvUNh9ZfRMq2_1Ef-XTZkbRbkeCI_CrkVYO1yiZmvM9NXMkvSYgJYnFp78sULAVcYDzYMIzeytifjKYRWm5qFefWL6KBWW3ZMC4M",
        "accessToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjdjNzQ5NTFmNjBhMDE0NzE3ZjFlMzA4ZDZiMjgwZjQ4ZjFlODhmZGEiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiTmlra28iLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUNnOG9jSmJCeWI2d3NPcFltNzhwVVV1QXJFd0VDX1N1bE1UWEczNVZtMERJcG0wbkhvM2c3OTA9czk2LWMiLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vY29yc28tZGktdW5pdHkiLCJhdWQiOiJjb3Jzby1kaS11bml0eSIsImF1dGhfdGltZSI6MTc2NDUxNTkyMiwidXNlcl9pZCI6IlJQR2FHeDRLamRSOFVZSjJFN3NIOUNSd2ZjaTIiLCJzdWIiOiJSUEdhR3g0S2pkUjhVWUoyRTdzSDlDUndmY2kyIiwiaWF0IjoxNzY0NTE1OTIyLCJleHAiOjE3NjQ1MTk1MjIsImVtYWlsIjoic29sb25pa2tvMjNAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZ29vZ2xlLmNvbSI6WyIxMDc4MDE2NzU4OTg3OTAyODIxNzciXSwiZW1haWwiOlsic29sb25pa2tvMjNAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoiZ29vZ2xlLmNvbSJ9fQ.evIy47DCa8vODTaBy0gP6TibcxQ2qacrV89fBG_tVE-Ws31lwPgVOxvQ4Mv8yR42E5g9Uas4ccgxycZ-VkGE_Bi086x0dSQTvGZdKvD4vLBOy_EEpYgJlXYg03rLLEUhH8ffp7gaMyvwfc-I9OeQjtz5Xi_dzuX8_de-b0f4x-Wt9eeHF0dDWnm8cuKMBxWWBuZDr5JeqW4lxeU2OYxmp1PSJvXavnyKU4W6LPdSkukab4AXJKTEhGKtnmC4CbCqLdgrQLAN6Up1iCMNl7zX6LCC_1zDKd7y0tMMxhnJlLH2If1lIu2XLRUkYq8XgHJ5AGvpUiTdG1n_gRqqBIbFSw",
        "expirationTime": 1764519522491
    },
    "createdAt": "1764514872407",
    "lastLoginAt": "1764515809224",
    "apiKey": "AIzaSyCW2vOC4VbyAvjTtcLVGcv8xEGGCmg-ncQ",
    "appName": "[DEFAULT]"
}


// Import the functions you need from the SDKs you need
window.onload = function() {
  
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  const googleApiKey = "AIzaSyCW2vOC4VbyAvjTtcLVGcv8xEGGCmg-ncQ";

  // Your web app's Firebase configuration
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

const ownerEmail = {
    "uid": "RPGaGx4KjdR8UYJ2E7sH9CRwfci2",
    "email": "solonikko23@gmail.com",
    "emailVerified": true,
    "displayName": "Nikko",
    "isAnonymous": false,
    "photoURL": "https://lh3.googleusercontent.com/a/ACg8ocJbByb6wsOpYm78pUUuArEwEC_SulMTXG35Vm0DIpm0nHo3g790=s96-c",
    "providerData": [
        {
            "providerId": "google.com",
            "uid": "107801675898790282177",
            "displayName": "Nikko",
            "email": "solonikko23@gmail.com",
            "phoneNumber": null,
            "photoURL": "https://lh3.googleusercontent.com/a/ACg8ocJbByb6wsOpYm78pUUuArEwEC_SulMTXG35Vm0DIpm0nHo3g790=s96-c"
        }
    ],
    "stsTokenManager": {
        "refreshToken": "AMf-vBzo5lx9td9qEAXfpUrXpnOoFm5s9nrsdxAD5IPeAhC26YXurBCcMjpNRW4PxmEGx2avpu8pXChUSfiUibjc6zwYwoVpGH8-MPz4o9j5aNMdX-3Qv5FLGotbK1xLQNGhdpwQAk5mg2DcKSMKjqz0kUs7Hpgf3WHZlqnGif-dar0hEGZELzUi-kide-w1P2tbSssqEWiswgByQzNYpphkQSQGR0ak9Mgk20232VnhO2fqY3rN_QWxC72SL0ckc4tC5iCevUV1UAvkqAIUJMldzQ_0mszYpW3yFw2gkkuP85FW7NqmuU1a20g5C_-ReWhyFS2Q2ttM240YMkJZvUNh9ZfRMq2_1Ef-XTZkbRbkeCI_CrkVYO1yiZmvM9NXMkvSYgJYnFp78sULAVcYDzYMIzeytifjKYRWm5qFefWL6KBWW3ZMC4M",
        "accessToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjdjNzQ5NTFmNjBhMDE0NzE3ZjFlMzA4ZDZiMjgwZjQ4ZjFlODhmZGEiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiTmlra28iLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUNnOG9jSmJCeWI2d3NPcFltNzhwVVV1QXJFd0VDX1N1bE1UWEczNVZtMERJcG0wbkhvM2c3OTA9czk2LWMiLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vY29yc28tZGktdW5pdHkiLCJhdWQiOiJjb3Jzby1kaS11bml0eSIsImF1dGhfdGltZSI6MTc2NDUxNTkyMiwidXNlcl9pZCI6IlJQR2FHeDRLamRSOFVZSjJFN3NIOUNSd2ZjaTIiLCJzdWIiOiJSUEdhR3g0S2pkUjhVWUoyRTdzSDlDUndmY2kyIiwiaWF0IjoxNzY0NTE1OTIyLCJleHAiOjE3NjQ1MTk1MjIsImVtYWlsIjoic29sb25pa2tvMjNAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZ29vZ2xlLmNvbSI6WyIxMDc4MDE2NzU4OTg3OTAyODIxNzciXSwiZW1haWwiOlsic29sb25pa2tvMjNAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoiZ29vZ2xlLmNvbSJ9fQ.evIy47DCa8vODTaBy0gP6TibcxQ2qacrV89fBG_tVE-Ws31lwPgVOxvQ4Mv8yR42E5g9Uas4ccgxycZ-VkGE_Bi086x0dSQTvGZdKvD4vLBOy_EEpYgJlXYg03rLLEUhH8ffp7gaMyvwfc-I9OeQjtz5Xi_dzuX8_de-b0f4x-Wt9eeHF0dDWnm8cuKMBxWWBuZDr5JeqW4lxeU2OYxmp1PSJvXavnyKU4W6LPdSkukab4AXJKTEhGKtnmC4CbCqLdgrQLAN6Up1iCMNl7zX6LCC_1zDKd7y0tMMxhnJlLH2If1lIu2XLRUkYq8XgHJ5AGvpUiTdG1n_gRqqBIbFSw",
        "expirationTime": 1764519522491
    },
    "createdAt": "1764514872407",
    "lastLoginAt": "1764515809224",
    "apiKey": "AIzaSyCW2vOC4VbyAvjTtcLVGcv8xEGGCmg-ncQ",
    "appName": "[DEFAULT]"
}


// Import the functions you need from the SDKs you need
window.onload = function() {
  
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  const googleApiKey = "AIzaSyCW2vOC4VbyAvjTtcLVGcv8xEGGCmg-ncQ";

  // Your web app's Firebase configuration
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

  // Initialize Firebase
  // 1. Inizializza auth e provider come hai fatto
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// 2. Togli il blocco getRedirectResult e setPersistence da window.onload

// 3. SETTA PERSISTENZA E INIZIA IL LISTENER STATO
    setPersistence(auth, browserLocalPersistence)
        .then(() => {
            // UNA VOLTA INIZIALIZZATO TUTTO, ASCOLTA LO STATO
            onAuthStateChanged(auth, (user) => {
                
                // Rimuoviamo eventuali listener precedenti per evitare duplicazioni
                // (utile soprattutto se stai gestendo la disconnessione)
                loginButton.removeEventListener('click', handleLoginRedirect);
                loginButton.removeEventListener('click', handleLogout);

                if (user) {
                    // UTENTE LOGGATO
                    console.log("Utente loggato:", user.displayName);
                    
                    // Salva dati (non usare più localStorage.getItem, usa user.displayName!)
                    localStorage.setItem('username', user.displayName);
                    localStorage.setItem('email', user.email);
                    localStorage.setItem('photo_url', user.photoURL);
                    
                    // Aggiorna UI per lo stato loggato (mostra foto, abilita logout)
                    loginImageDiv.innerHTML = ``;
                    loginUsername.innerHTML = `${user.displayName}`;
                    loginButton.classList.add('w3-disabled'); 
                    
                    // Imposta il pulsante come LOGOUT
                    loginButton.addEventListener('click', handleLogout); 

                } else {
                    // UTENTE DISCONNESSO
                    console.log("Utente disconnesso. Prepara per il login.");
                    
                    // Imposta il pulsante come LOGIN
                    loginButton.classList.remove('w3-disabled');
                    loginButton.addEventListener('click', handleLoginRedirect);
                    
                    // Pulisci UI se l'utente si è disconnesso da un'altra tab
                    loginImageDiv.innerHTML = ''; 
                    loginUsername.innerHTML = 'LOGIN';
                }
            });
        });
  function signInWithGooglePopup() {
      signInWithRedirect(auth, provider);
  }
}
}