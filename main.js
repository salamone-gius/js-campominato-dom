// CAMPO MINATO
// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 => tra 1 e 80
// con difficoltà 2 => tra 1 e 50


let userTries = 3;

// 1. faccio generare al computer 16 numeri casuali tra 1 e 100 (non ci possono essere duplicati);
// 1.1 creo un array vuoto che popolerò con 16 numeri casuali
let bombs = [];
// 1.2 FINTANTO CHE l'array bombs contiene meno di 16 elementi
while (bombs.length < 16) {
    // 1.3 creo un numero casuale
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    // 1.4 Scorrendo l'array devo controllare che il numero casuale non sia presente nell'array bombs
    for (let i = 0; i <= bombs.length; i++) {
        // 1.5 SE l'array bombs NON (!) include il randomNumber
        if (!bombs.includes(randomNumber)) {
            // 1.6 lo aggiungo all'array bombs
            bombs.push(randomNumber);
        // 1.7 ALTRIMENTI niente
        } else {
        }
    }
}
console.log(`${"Array bombs ="} ${bombs}`);

// 2. chiedo all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
//    L’utente non può inserire più volte lo stesso numero.
// 2.1 creo un array vuoto che popolerò con i numeri inseriti dall'utente
let userNumbers = [];
// 2.2 per x volte: chiedo all'utente di inserire un numero
// 2.3 FINTANTO CHE la lunghezza dell'array userNumbers (numeri scelti dall'utente) è minore del numero di tentativi a disposizione
while (userNumbers.length < userTries) {
    // 2.4 dico all'utente di inserire un numero tra 1 e 100
    let userNumb = Number(prompt("Inserisci un numero tra 1 e 100"));
    // 2.4 SE l'utente inserisce un numero già presente nell'array bombs
    if (bombs.includes(userNumb)) {
        // 2.5 la partita termina e l'utente ha perso
        alert("Hai beccato una bomba! Hai perso...");
        // 2.6 ALTRIMENTI
    } else {
        // 2.7 lo aggiungo all'array userNumbers e continuo
        userNumbers.push(userNumb);
    }
}

console.log(`${"Array userNumbers ="} ${userNumbers}`);

// //         // 2.3 SE il numero inserito: NON è già presente nell'array userNumbers;
// //         //                          ED NON è minore o uguale a 0;
// //         //                          ED NON è maggiore di 100;
// //         //                          E NON è un NaN;
// //         if ((!userNumbers.includes(userNumb)) && (userNumb > 0) && (userNumb <= 100) && (!isNaN(userNumb))) {
// //             // ALLORA lo aggiungo all'array userNumbers,
// //             userNumbers.push(userNumb);
// //             alert("Ottimo! Niente bomba. Continua.");
// //         // 2.4 ALTRIMENTI, SE il numero inserito è contenuto nell'array bombs
// //         } else {
// //             alert("Ho detto UN NUMERO TRA 1 E 100! Riprova.");
// //         }
//     }
// } while (bombs.includes(userNumb) || (userTries = 0));
