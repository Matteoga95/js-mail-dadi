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

    //faccio un alert per dire che la mail era sbagliata e di ricaricare la pagina
    alert("Hai inserito una mail non valida, ricarica la pagina per riprovare...");

    document.getElementById("blocco-info").style.display = "none";


} else {

    console.log("Mail corretta, che il gioco dei dadi abbia inizio!!");

    //faccio un alert per dire che la mail era corretta e di continuare
    alert("Mail corretta, che il gioco dei dadi abbia inizio!!");


    //vado avanti con il gioco dei dadi

    //vado avanti solo quando viene cliccato inizia
    const mainButton = document.querySelector("button");

    mainButton.addEventListener("click", function () {

        //Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

        const playerNum = Math.floor(Math.random() * 6);

        const computerNum = Math.floor(Math.random() * 6);


        //abilito a schermo il div con i risultati del gioco
        document.getElementById("blocco-game").style.display = "block";


        //scrivo a console e a schermo il numero del giocatore
        console.log("Il tuo numero è " + playerNum);
        document.getElementById("player-number").innerHTML = playerNum;

        //scrivo a console e a schermo il numero del computer
        console.log("Mentre il mio è " + computerNum);
        document.getElementById("computer-number").innerHTML = computerNum;

        let resultString = "";

        //se il numero del player è più alto ha vinto lui
        if (playerNum > computerNum) {

            //valorizzo  il risultato in questo caso
            resultString = "Wow che fortuna hai vinto, la prossima volta vincerò io..."

            //se il numero del player è più basso ho vinto io
        } else if (playerNum < computerNum) {

            //valorizzo  il risultato in questo caso
            resultString = "Ho vinto io mi dispiace, la prossima volta forse sarai più fortunato...";

            //se il numero del player è uguale al mio ho vinto io di nuovo? mah sì dai
        } else {

            //valorizzo  il risultato in questo caso
            resultString = "Sembra che qui abbiamo un pareggio, facciamo che in questi casi vinco io?...";
        }

        //stampo risultato
        console.log(resultString);
        document.getElementById("result-String").innerHTML = resultString;


    })


}


//stampo messaggio per far ricominciare l'utente
console.log("Ricarica la pagina per iniziare da capo.");
document.getElementById("ricarica").innerHTML = "Ricarica la pagina per iniziare da capo.";
