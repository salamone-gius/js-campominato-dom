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



// GAME SETTINGS \\
const numberOfBombs = 16;
let level;

let bombs = [];
let userNumbers = [];
let minRange = 1;
let maxRange;

console.log(`${"level ="} ${level}`);
console.log(`${"maxRange ="} ${maxRange}`);


// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
alert("Benvenuto a Campo Minato.")
alert("Inserisci un livello di difficoltà.");
// BONUS.1 FINTANTO CHE l'utente inserisce un NaN OPPURE un numero minore di 0 OPPURE maggiore di 2
while (isNaN(level) || (level < 0) || (level > 2)) {
    // BONUS.2 continuo a chiedere all'utente di inserire un livello di difficoltà
    level = Number(prompt("0=facile  1=medio  2=difficile"));
    // BONUS.3 SE l'utente inserisce un NaN
    if (isNaN(level) || (level < 0) || (level > 2)) {
        // BOUNS.4 glielo faccio notare
        alert("Devi inserire un NUMERO tra 0, 1 e 2.");
    // BONUS.5 ALTRIMENTI niente
    } else {
    }
}

// BONUS.6 SE il numero inserito dall'utente (level) è 0
if (level === 0) {
    // BOUNS.7 setto il range massimo dei numeri casuali generati a 100
    maxRange = 100;
// BONUS.8 ALTRIMENTI SE il numero inserito dall'utente (level) è 1
} else if (level === 1) {
    // BOUNS.9 setto il range massimo dei numeri casuali generati a 80
    maxRange = 80;
// BONUS.10 ALTRIMENTI (il numero inserito dall'utente (level) è 2)
} else {
    // BOUNS.11 setto il range massimo dei numeri casuali generati a 50
    maxRange = 50;
}

const userTries = maxRange - numberOfBombs;


console.log(`${"level ="} ${level}`);
console.log(`${"maxRange ="} ${maxRange}`);
console.log(`${"userTries ="} ${userTries}`);

// 1. faccio generare al computer 16 numeri casuali tra 1 e 100 (non ci possono essere duplicati);
// 1.2 FINTANTO CHE l'array bombs contiene meno di 16 elementi
while (bombs.length < numberOfBombs) {
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

// 2. chiedo all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
//    L’utente non può inserire più volte lo stesso numero.
// 2.1 imposto una variabile con valore 'false' PER CONTROLLARE I CICLI
let gameOver = false;
// 2.2 per x volte: chiedo all'utente di inserire un numero
// 2.3 FINTANTO CHE la lunghezza dell'array userNumbers (numeri scelti dall'utente) è minore del numero di tentativi a disposizione E gameOver è settato su 'false'
while ((userNumbers.length < userTries) && (gameOver === false)) {
    // 2.4 dico all'utente di inserire un numero tra 1 e 100
    let userNumb = Number(prompt("Inserisci un numero tra 1 e 100."));
    // 2.5 SE l'utente inserisce un numero già presente nell'array bombs
    if (bombs.includes(userNumb)) {
        // 2.6 la partita termina e l'utente ha perso
        alert("Hai beccato una bomba!");
        gameOver = true;
    // 2.7 ALTRIMENTI SE l'utente inserisce un NaN OPPURE un numero minore o uguale a 0 OPPURE maggiore di 100
    } else if (isNaN(userNumb) || (userNumb <= 0) || (userNumb > 100)) {
        // 2.8 gli dico dolcemente che ha sbagliato
        alert("Sai leggere? Ho detto un NUMERO TRA 1 E 100!");
    // 2.9 ALTRIMENTI SE l'utente inserisce un numero che aveva già inserito precedentemente
    } else if (userNumbers.includes(userNumb)) {
        // 2.10 lo avverto che lo aveva già inserito
        alert("Hai già inserito questo numero.")
    // 2.11 ALTRIMENTI
    } else {
        // 2.12 tranquillizzo l'utente, aggiungo il suo numermo all'array userNumbers e continuo
        alert("Ottimo! Fin qui niente bombe. Continua.")
        userNumbers.push(userNumb);
    }
}

// 3. Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// 3.1 SE l'utente ha beccato una bomba (gameOver === true)
if (gameOver === true) {
    // 3.2 gli comunico che ha perso
    alert("Hai perso...");
// 3.3 ALTRIMENTI
} else {
    // 3.4 gli comunico che ha vinto
    alert("Complimenti! Hai vinto!");
}

// 3.5 comunico (in ogni caso) all'utente il suo punteggio (di quanti elementi è composto l'array dei suoi numeri)
alert(`${"Il tuo punteggio:"} ${userNumbers.length}`);
