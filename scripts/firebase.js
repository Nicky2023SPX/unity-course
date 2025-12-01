// ====================================================================
// 1. IMPORTAZIONI MODULARI
// ====================================================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js"; 
import { 
    getAuth, 
    GoogleAuthProvider, 
    signInWithRedirect, 
    onAuthStateChanged, // Per il listener di stato
    setPersistence, 
    browserLocalPersistence, // Per la persistenza locale
    signOut // Per la disconnessione
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js"; 

// ====================================================================

window.onload = function() {

    // --- CONFIGURAZIONE E INIZIALIZZAZIONE ---
    
    const googleApiKey = "AIzaSyCW2vOC4VbyAvjTtcLVGcv8xEGGCmg-ncQ";    
    const firebaseConfig = {
      apiKey: googleApiKey,
      authDomain: "corso-di-unity.firebaseapp.com",
      projectId: "corso-di-unity",
      storageBucket: "corso-di-unity.firebasestorage.app",
      messagingSenderId: "387995337831",
      appId: "1:387995337831:web:f1a285590731e8664800c2"
    };

    const app = initializeApp(firebaseConfig); 
    const auth = getAuth(app); 
    const provider = new GoogleAuthProvider();
    
    // --- SELEZIONE ELEMENTI DOM ---
    const loginButton = document.querySelector('.login-btn');
    const loginImageDiv = document.querySelector('.login-btn-image');
    const loginUsername = document.querySelector('.login-btn-username');

    // --- FUNZIONI HELPER ---

    function handleLoginRedirect() {
        console.log("Tentativo di Login avviato.");
        signInWithRedirect(auth, provider);
    }

    function handleLogout() {
        console.log("Logout richiesto.");
        signOut(auth).then(() => { 
            localStorage.clear();
            window.location.href = ""; 
        });
    }

    // --- LOGICA DI AUTENTICAZIONE PRINCIPALE (Ordina Corretto!) ---
    
    // 1. Impostiamo la persistenza in modo asincrono
    setPersistence(auth, browserLocalPersistence)
        .then(() => {
            // 2. SOLO DOPO, impostiamo il listener di stato per intercettare il risultato del redirect
            onAuthStateChanged(auth, (user) => {
                
                // Pulisci i listener vecchi
                loginButton.removeEventListener('click', handleLoginRedirect);
                loginButton.removeEventListener('click', handleLogout);
                
                // TEST MOBILE: ALERT per vedere lo stato dell'utente
                if (user) {
                    alert("LOGIN RIUSCITO! Utente: " + user.displayName);
                } else {
                    alert("Utente Disconnesso (o Handshake Fallito)");
                }

                if (user) {
                    // UTENTE LOGGATO
                    console.log("Utente loggato:", user.displayName);

                    localStorage.setItem('username', user.displayName);
                    localStorage.setItem('email', user.email);
                    localStorage.setItem('photo_url', user.photoURL);
                    
                    loginImageDiv.innerHTML = ``;
                    loginUsername.innerHTML = `${user.displayName}`;
                    loginButton.classList.remove('w3-disabled'); // Lo abilito per il logout
                    
                    // Imposta il pulsante come LOGOUT
                    loginButton.addEventListener('click', handleLogout);

                } else {
                    // UTENTE DISCONNESSO
                    console.log("Utente disconnesso. Prepara per il login.");
                    
                    // Pulisci UI e imposta il pulsante come LOGIN
                    loginImageDiv.innerHTML = '';
                    loginUsername.innerHTML = 'LOGIN';
                    loginButton.classList.remove('w3-disabled');
                    loginButton.addEventListener('click', handleLoginRedirect);
                }
            });
        });
}