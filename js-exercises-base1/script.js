
//Exercice 6
    
function myFunction() { 
var monNum = document.getElementById('premier_nombre').value;
var monPrem = parseInt(monNum);
var monNumD = document.getElementById('deuxieme_nombre').value;
var monDeux = parseFloat(monNumD);
var monTot = (monPrem/ monDeux); 
    alert ("la divison de ton nombre est: " + monTot );
            };
