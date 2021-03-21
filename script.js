//Quanti km devi percorrere?
var km = prompt ('Quanti km vuoi percorrere?');
console.log('Quanti km deve percorrere?',km)


//Età
var age = prompt('Quanti anni hai?');
console.log('quanti anni ha',age);

//Prezzo
var prezzo = km  * 0.21 
 
 
//Prezzo Under 18
var scontoUnder = prezzo * 20 / 100;
var prezzoUnder = prezzo - scontoUnder;

 //Prezzo Over 65  
 var scontoOver = prezzo * 40 / 100;
 var prezzoOver = prezzo - scontoOver; 

 

//Prezzo finale
var prezzoFinale
if ( age < 18 ) {
    prezzoFinale = prezzoUnder.toFixed(2);
} else  if ( age >=  18 || age <= 65 ) {
    prezzoFinale = prezzo.toFixed(2);
} else {
    prezzoFinale = prezzoOver.toFixed(2);
}
    
  console.log('Il prezzo da pagare è:'+ prezzoFinale +'€') ;      
    document.getElementById('risultato').innerHTML = ('Il suo prezzo da pagare è: ' + prezzoFinale + '€')