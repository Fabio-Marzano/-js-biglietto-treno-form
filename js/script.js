// RECUPERARE PULSANTE DAL DOM//
const btn = document.getElementById('calculate');
// IL PULSANTE RESTA IN ATTESA DI UN CLICK//
btn.addEventListener('click', function () {
  const km = document.getElementById('km').value;
  const age = document.getElementById('age').value;

  // CALCOLO DEL PREZZO BASE//
  let price = km * 0.21;
  let final_price;

  // VERIFICO ETA PASSEGGERO E APPLICO SCONTO A SECONDA DEL VALORE CALCOLATO //
    if (age == 0) { //MAGGIORE DI 18 ANNI//
      final_price = price;
    } 
    else if (age == 1) { //MINORE DI 18 ANNI//
      final_price = price * 0.8;
    }

    else if (age == 2) { //OVER 65//
      final_price = price * 0.6;
    }

    else { //ALTRE CONDIZIONI//
      alert('Non hai selezionato eta. Verra applicato il costo base');
    }

    
    document.getElementById('final_price').innerHTML = `Il tuo biglietto costa ${final_price.toFixed(2)}€`
    
 


})  


