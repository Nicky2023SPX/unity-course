// 1. IMPORTAZIONI CORRETTE (Assicurati che questa sia la riga in cima al tuo file!)
import { 
    initializeApp 
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js"; 
import { 
    getAuth, 
    getRedirectResult,
    GoogleAuthProvider, 
    signInWithRedirect, 
    onAuthStateChanged, // <-- Aggiunto!
    setPersistence, 
    browserLocalPersistence, 
    signOut // <-- Aggiunto!
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js"; 

// (Ho rimosso l'oggetto ownerEmail che non è usato nella logica)

window.onload = function() {

    // --- CONFIGURAZIONE E INIZIALIZZAZIONE (Una sola volta!) ---
    
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
    alert("Auth Inizializzato!"); // <-- TEST QUI!
    
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
        // Usiamo la funzione modulare signOut
        signOut(auth).then(() => { 
            localStorage.clear();
            window.location.href = ""; 
        });
    }
    
    
    getRedirectResult(auth)
    .then((result) => {
        alert(result);
        if (result) {
            // Successo: l'utente è loggato
            alert("Dati catturati con getRedirectResult! " + result.user);
            // ... (Salvataggio LocalStorage)
        }
    })
    .catch((error) => {
        // Gestione degli errori, qui vedresti perché fallisce
    });

    // --- LOGICA DI AUTENTICAZIONE PRINCIPALE ---
    
    onAuthStateChanged(auth, (user) => {
                
                // Pulisci i listener vecchi
                loginButton.removeEventListener('click', handleLoginRedirect);
                loginButton.removeEventListener('click', handleLogout);
                
                alert(user);
                if (user) {
                    // UTENTE LOGGATO (Questo si attiva anche dopo il redirect!)
                    console.log("Utente loggato:", user.displayName);

                    localStorage.setItem('username', user.displayName);
                    localStorage.setItem('email', user.email);
                    localStorage.setItem('photo_url', user.photoURL);
                    
                    loginImageDiv.innerHTML = ``;
                    loginUsername.innerHTML = `${user.displayName}`;
                    loginButton.classList.add('w3-disabled');
                    
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
    
    setPersistence(auth, browserLocalPersistence)
        .then(() => {})
 
}