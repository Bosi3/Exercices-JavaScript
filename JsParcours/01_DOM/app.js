
//EXERCICE 1 : Manipulation de classes

body = document.body;
body.classList.remove("bg-aqua");
body.classList.add("bg-olive");
var firstP = document.getElementById('first-paragraph');
firstP.classList.remove("bg-lime");
firstP.classList.remove("gray");
firstP.classList.add("aqua");
var silver = document.querySelectorAll(".bg-silver");
for (var i = 0; i < silver.length; i++) {
    silver[i].classList.remove('.bg-silver');
    silver[i].classList.add(".bg-teal");
}
var block = document.querySelectorAll('blockquote');
for (var i = 0; i < block.length; i++) {
    block[i].classList.add(".bg-white");
}

//EXERCICE 2 : Selecteurs CSS

var table = document.querySelector("#my-table");
table.classList.add("bg-purple");
var container = document.querySelector('.container ');
var mesP = container.querySelectorAll("p");
//console.log(mesP);
function function1() {
    for (var i = 0; i < mesP.length; i++) {
        var att = document.createAttribute("class");
        att.value = "shadow";
        //console.log(att);
        mesP[i].setAttributeNode(att);
    }
}
function1();

//EXERCICE 3

var monPre = document.getElementsByTagName("pre");
//console.log(monPre);
//function function2() {    
//for (var i = 0; i < mesP.length; i++) {
monPre[0].setAttribute("style", "color: white; background-color: #69ad8f; border-top : 3px solid red; border-bottom : 3px solid red;");
//};                          
//};
//function2();
var pH3 = document.querySelector("h3");
//console.log(pH3);
var myEm = document.createElement("em");
myEm.innerHTML = "   Italic title ! yeah !";
//console.log(myEm);
pH3.appendChild(myEm);
var pH2 = document.querySelector("h2");
console.log(pH2);
var myStr = document.createElement("strong");
myStr.innerHTML = "   HTML doesn't work !";
console.log(myStr);
pH2.replaceWith(myStr);

//EXERCICE 4 

var firstUL = document.getElementsByTagName('ul')[0];
console.log(firstUL);
var myLi = document.createElement("li");
myLi.innerHTML = " Mon meilleur ami est <a href='http://www.google.com'>Google</a>";
//console.log(myEm);
firstUL.appendChild(myLi);
var myA = myLi.getElementsByTagName("a")[0];
//console.log(myA);
myA.style.color = " white";

//EXERCICE 5 : Création et suppression de plusieurs éléments

var firstOL = document.getElementsByTagName('ol')[0];
console.log(firstOL);
var allContent = firstOL.childNodes;
console.log(allContent);
function function3() {

    //var myNode = document.getElementById("foo");
    while (firstOL.firstChild) {
        firstOL.removeChild(firstOL.firstChild);
    }
}
function3();
