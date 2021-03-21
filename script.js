//Quanti km devi percorrere?
var km = prompt ('Quanti km vuoi percorrere?');
console.log('Quanti km deve percorrere?',km)


//Età
var age = prompt ('Quanti anni hai?');
console.log('quanti anni ha',age);

//Prezzo
var prezzo = km  * 0.21 
 
 
//Prezzo Under 18
var scontoUnder = prezzo * 20 / 100;
var prezzoUnder = prezzo - scontoUnder;

 //Prezzo Over 65  
 var scontoOver = prezzo * 40 / 100;
 var prezzoOver = prezzo - scontoOver; 
 console.log('prezzo over:',prezzoOver);
 

//Prezzo finale
var prezzoFinale
if ( age < 18 ) {
    prezzoFinale = prezzoUnder + '$';
} else if ( age >=  18 ) {
    prezzoFinale = prezzo +'$';
} else if ( age > 65) {
    prezzoFinale = prezzoUnder + '$';
}

    
  console.log('Il prezzo da pagare è:'+ prezzoFinale )       
    