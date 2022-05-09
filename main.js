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


// 1. faccio generare al computer 16 numeri casuali tra 1 e 100 (non ci possono essere duplicati);
// 1.1 creo un array vuoto che popolerò con 16 numeri casuali
let random16 = [];

// 1.2 per 16 volte: creo un numero casuale
for (let i = 0; i < 16; i++) {
    let random = Math.floor(Math.random() * 100 + 1);
    // 1.3 SE il numero generato NON è già presente nell'array random16
    if (!random16.includes(random)) {
        // 1.4 ALLORA lo aggiungo, ALTRIMENTI niente
        random16.push(random);
    } else {

    }
}

console.log(`${"random16 ="} ${random16}`);