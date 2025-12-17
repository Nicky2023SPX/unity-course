// ====================================================================
// 1. IMPORTAZIONI MODULARI
// ====================================================================

import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";

import {
    getAuth,
    GoogleAuthProvider,
    signOut
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

// ====================================================================

window.location.href = 'https://nikslabs.com?uc';

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
            window.location.href = "https://corso-di-unity.firebaseapp.com/logout.html";
        });
    }

    // --- LOGICA DI AUTENTICAZIONE PRINCIPALE (Ordina Corretto!) ---

    // --- CONTROLLO INIZIALE (LOGIN NEL PARAMETRO) ---
    // Test URL: ?username=Nikko&email=solonikko23@gmail.com&photoUrl=https://lh3.googleusercontent.com/a/ACg8ocJbByb6wsOpYm78pUUuArEwEC_SulMTXG35Vm0DIpm0nHo3g790=s96-c
    const urlParams = new URLSearchParams(window.location.search);
    const displayName = urlParams.get('username');
    const email = urlParams.get('email');
    const photoURL = urlParams.get('photoUrl');
    if (email != null) {
        localStorage.setItem('username', displayName);
        localStorage.setItem('email', email);
        localStorage.setItem('photo_url', photoURL);
        window.location = window.location.pathname;
    } else {
        if (localStorage.getItem('username') != null) {
            // UTENTE LOGGATO
            console.log("Utente loggato:", localStorage.getItem('username'));

            loginImageDiv.innerHTML = `<img src="${localStorage.getItem('photo_url')}">`;
            loginUsername.innerHTML = `${localStorage.getItem('username')}`;
            loginButton.classList.add('w3-green');
            loginButton.classList.remove('w3-dropdown-hover');
            loginButton.classList.add('w3-dropdown-click');
            
            

            loginButton.parentElement.innerHTML += `
                    <div class="w3-dropdown-content w3-bar-block w3-border">
                        <div style="height: 50px"></div>
                        <a href="space.html" class="w3-bar-item w3-button">La mia area personale</a>
                        <a href="lessons.html" class="w3-bar-item w3-button">Le mie lezioni</a>
                        <a href="#" class="w3-bar-item w3-button w3-red logout-btn"><i class="bi bi-box-arrow-left"></i> Logout</a>
                    </div>
            `;
            const logoutButton = document.querySelector('.logout-btn');
            logoutButton.addEventListener('click', handleLogout);
        } else {
            // UTENTE DISCONNESSO
            console.log("Utente disconnesso. Prepara per il login.");

            // Pulisci UI e imposta il pulsante come LOGIN
            loginImageDiv.innerHTML = '<i class="bi bi-box-arrow-right"></i>';
            loginUsername.innerHTML = 'Login';
            loginButton.classList.remove('w3-disabled');
            loginButton.addEventListener('click', handleLoginRedirect);
        }
    }


}