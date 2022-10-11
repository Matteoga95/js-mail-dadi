// Mail
// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

//definisco la lista (array ) di email che possono accedere
const listaMails = [
    "user@gmail.com",
    "matteo@gmail.com",
    "riccardo@gmail.com",
    "donato@gmail.com",
    "fabio@gmail.com"
];

//chiedo all'utente di inserire la mail per accedere

const askMail = prompt("Inserisci la mail per poter accedere");

//mi definisco una variabile booleana per verificare se successivamente trovo il dato che mi interessa
let trovato = false;

//ciclo l'array e controllo la mia mail sia al suo interno
for (let i = 0; i < listaMails.length; i++) {

    //confronto l'item dell'array con la mail chiesta all'utente
    if (askMail == listaMails[i]) {
        trovato = true;
    }

}

//se finito il ciclo trovato è = a true allora faccio andare avanti l'utente e stamp che la mail era corretta, altrimenti non lo faccio andare avanti dicendo che la mail era sbagliata

if (trovato === false) {

    console.log("Hai inserito una mail non valida, ricarica la pagina per riprovare...");

} else {
    console.log("Mail corretta, che il gioco dei dadi abbia inizio!!");
    //vado avanti con il gioco dei dadi

    //Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

    const playerNum = Math.floor(Math.random() * 6);

    const computerNum = Math.floor(Math.random() * 6);

    console.log("Il tuo numero è " + playerNum);

    console.log("Mentre il mio è " + computerNum);

    if (playerNum > computerNum) {
        console.log("Wow che fortuna hai vinto, la prossima volta vincerò io...");
    } else if (playerNum < computerNum) {
        console.log("Ho vinto io mi dispiace, la prossima volta forse sarai più fortunato...");
    } else {
        console.log("Sembra che qui abbiamo un pareggio, facciamo che in questi casi vinco io?...");
    }

    console.log("Ricarica la pagina per iniziare da capo.");

}