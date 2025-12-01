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
        window.location.href = "https://corso-di-unity.firebaseapp.com/index.html";
        //signInWithRedirect(auth, provider);
    }

    function handleLogout() {
        console.log("Logout richiesto.");
        signOut(auth).then(() => { 
            localStorage.clear();
            window.location.href = ""; 
        });
    }

    // --- LOGICA DI AUTENTICAZIONE PRINCIPALE (Ordina Corretto!) ---

    // --- CONTROLLO INIZIALE (LOGIN NEL PARAMETRO) ---
    // Test URL: ?username=Nikko&email=solonikko23@gmail.com&photoUrl=https://lh3.googleusercontent.com/a/ACg8ocJbByb6wsOpYm78pUUuArEwEC_SulMTXG35Vm0DIpm0nHo3g790=s96-c
    const urlParams = new URLSearchParams(window.location.search);
    const displayName = urlParams.get('username');
    const email = urlParams.get('email');
    const photoURL = urlParams.get('photoURL');
    if (email != null)
    {
        localStorage.setItem('username', displayName);
        localStorage.setItem('email', email);
        localStorage.setItem('photo_url', photoURL);
        window.location = window.location.pathname;
    }
    
    // 1. Impostiamo la persistenza in modo asincrono
    setPersistence(auth, browserLocalPersistence)
        .then(() => {
            // 2. SOLO DOPO, impostiamo il listener di stato per intercettare il risultato del redirect
            onAuthStateChanged(auth, (user) => {
                
                // Pulisci i listener vecchi
                loginButton.removeEventListener('click', handleLoginRedirect);
                loginButton.removeEventListener('click', handleLogout);
                
                if (localStorage.getItem('email') != null) {
                    console.log("LOGIN RIUSCITO! Utente: " + user.displayName);
                } else {
                    console.log("Utente Disconnesso (o Handshake Fallito)");
                }

                if (localStorage.getItem('email') != null) {
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
                    loginUsername.innerHTML = 'Login';
                    loginButton.classList.remove('w3-disabled');
                    loginButton.addEventListener('click', handleLoginRedirect);
                }
            });
        });
}