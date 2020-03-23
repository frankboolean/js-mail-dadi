
var tiroUser=prompt("lancia i dadi");

tiroUser = Math.floor((Math.random() * 6) + 1) + Math.floor((Math.random() * 6) + 1);

var tiroPc=prompt ("il tuo risultato è " + tiroUser + " Ora lancia giocatore 2");

tiroPc= Math.floor((Math.random() * 6) + 1) + Math.floor((Math.random() * 6) + 1);


var vincente;

if (tiroUser > tiroPc){
  vincente= "i dadi del giocatore 2 hanno come risultato " + tiroPc + " hai vinto"
}else if (tiroUser < tiroPc) {
  vincente= "i dadi del giocatore 2 hanno come risultato " + tiroPc + " hai perso"
}else{
  vincente="i dadi del giocatore 2 hanno come risultato " + tiroPc + "parità"
}

document.getElementById('msg').innerHTML = vincente;
