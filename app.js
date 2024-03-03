// Sélectionnez le bouton avec l'ID "button"
const button = document.getElementById('btn');

button.addEventListener("click", function calcul() {
    const amount = parseFloat(document.getElementById("amount").value); 
    const pour = parseFloat(document.getElementById("tip").value) ; 
    const total = amount + (amount * pour / 100); 
    document.getElementById("total").innerText = "€" + total.toFixed(2) ;
    
});
