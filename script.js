/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

//? let x=10
//? let y=100
//? let z= x > y ? console.log(x):console.log(y);

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

//? let x = "not equal"
//? let y = 6


//? if(y != 5) {
//?   console.log(x);
//? }

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisible by 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

//? let x = "divisibile by 5"
//? let y = 10

//? if (y % 5 === 0) {
//?   console.log(x);
//? }

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

//? let x = 8
//? let y = 16

//? console.log( ( x , y === 8) || ( y - x === 8 ) );




/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

//?  let totalShoppingCart = 40
 
//?  if ( totalShoppingCart > 50) {
//?   console.log("spedizione gratuita");

//?  } else ( totalShoppingCart < 50 ) 
//? console.log ( totalShoppingCart + 10);
 
 


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

//?  let totalShoppingCart = 60
//?  let blackFriday = totalShoppingCart - ( totalShoppingCart * 20 / 100 ) 

//?   if ( totalShoppingCart > 50) {
//?    console.log (blackFriday) ;
//?   } 
//?   else console.log ( blackFriday + 10);




/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

//? let a = 5
//? let b = 222
//? let c = 13
//? if ((a > b) && (b > c)) {
//?   console.log("a=" + a);
//?   console.log("b=" + b);
//?   console.log("c=" + c);
//? } else if ((a > c) && (c > b)) {
//?   console.log("a=" + a);
//?   console.log("c=" + c);
//?   console.log("b=" + b);
//? } else if ((b > a) && (a > c)) {
//?   console.log("b=" + b);
//?   console.log("a=" + a);
//?   console.log("c=" + c);
//? } else if ((b > c) && (c > a)) {
//?   console.log("b=" + b);
//?   console.log("c=" + c);
//?   console.log("a=" + a);
//? } else if ((c > a) && (a > b)) {
//?   console.log("c=" + c);
//?   console.log("a=" + a);
//?   console.log("b=" + b);
//? } else if ((c > b) && (b > a)) {
//?   console.log("c=" + c);
//?   console.log("a=" + a);
//?   console.log("b=" + b);
//? }

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un numero fornito sia un intero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

//?  let x = 122;

//?  console.log( typeof x);


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

//? let numb = 20;

//? if ( numb % 2 === 0 ) { 
//?   console.log("pari")
//? }
//? else {
//?   console.log("dispari");
//? }



//  ESERCIZIO 10
//   Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  
  
  //? let val = 7
  //? if (val < 10) {
  //?     console.log("Meno di 10");
  //?   } else if (val < 5) {
  //?     console.log("MAGGIORE di 5");
  //?   } else {
  //?     console.log("Uguale a 10 o maggiore");
  //?   }




/*
ESERCIZIO 11
  Crea un blocco condizionale if/else annidato su più livelli per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

//? let num = 20 

//? if ( num < 5) {
//?   console.log( "Tiny" );
//? }
//?  else if ( num < 10 ) {
//?   console.log( "Small");
//? }
//? else if ( num < 15 ) {
//?   console.log( "Medium");
//? }
//? else if ( num < 20 ) {
//?   console.log( "Large");
//? }
//? else  ( num >= 20 ) 
//?   console.log( "Huge");




/*  ESERCIZIO 12
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile chiamata isMale.
*/

//? let isMale= "male"

//? let gender=  isMale === "male" ? console.log("è maschio") : console.log("è femmina");

/* ESERCIZIO 13
  Mostra i numeri da 0 a 5 (incluso) in ordine ascendente utilizzando un ciclo while.
*/

//? let n = 0

//?  while (n <= 5) {
//?   console.log(n);
//?   n++;
//?  }

/* ESERCIZIO 14
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente utilizzando un ciclo for.
*/

//? for  ( let step = 0; step < 11; step ++ )
//? console.log (step);
  

/* ESERCIZIO 15
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8.
*/

//? for  ( let step = 0; step < 11; step ++ ) {

//?     if ( step === 3 ) {
//?       continue
//?     }
//?     if (step === 8) {
//?       continue
//?     }
//?     console.log (step);
//? }
 
  

/* ESERCIZIO 16
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

//? for ( let step= 0; step < 16; step ++) {
  
//?   if (step % 2  === 0) {
//?     console.log(step + "__pari");
//?   } else console.log( step + "__dispari");

//? }

/* ESERCIZIO 17
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3, stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

//? for ( let step= 1; step < 100; step ++) {
  
//?       if (( step % 3 === 0) && ( step % 5 === 0)) {
//?         console.log("fizzBuzz");
//?       }
//?       else if (step % 3  === 0) {
//?        console.log("_Fizz");
//?       } 
//?       else if ( step % 5 === 0) {
//?       console.log("_Buzz");
//?       }
    
//?        }
      

   

/* ESERCIZIO 18
  Scrivi un algoritmo per controllare il giorno della settimana. Usa uno switch-case sulla variabile "day", che può avere un valore da 1 a 7.
  Ad esempio, se il valore di "day" è 1, stampa in console "Lunedì"; se il valore fosse 3, in console dovrebbe comparire "Mercoledì".
*/

//? let day = 5

//? switch (day) {
//?   case 1:
//?     console.log("Lunedi");
//?     break;
//?   case 2:
//?     console.log("Martedì");
//?     break;
//?   case 3:
//?       console.log("Mercoledì");
//?       break;
//?   case 4:
//?     console.log("Giovedì");
//?     break;
//?   case 5:
//?     console.log("Venerdì");
//?     break;
//?   case 6:
//?     console.log("Sabato");
//?     break;
//?   case 7:
//?     console.log("Domenica");
//?     break;

//?   default:  
//?   console.log( "questo non e un giorno valido");
    
//? }

