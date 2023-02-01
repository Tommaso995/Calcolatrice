let risultato = document.getElementById("result");

function n(dato){ 
    risultato.value += dato;
 }
 
 function operazione() { 
    risultato.value = eval(risultato.value); 
 }
 
 function cancella() { 
    risultato.value = ""; 
 }
