// noi possibili indirizzi

var indirizzi= ["gianni.gmail.com","fra.gmail.com","matteo.gmail.com","luigi.gmail.com"];

var domanda= prompt("qual'è il tuo indirizzo mail?");

var mailPresente= "la mail da lei inserita non è corretta";

for (var i= 0; i < indirizzi.length; i++) {
  if (domanda ==  indirizzi[i]) {
    mailPresente= "Mail corretta! ";
  }
}

document.getElementById('msg').innerHTML = mailPresente ;
