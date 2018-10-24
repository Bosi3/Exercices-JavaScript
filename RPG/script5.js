var maChaine2 = "<image xlink:href= images/Hermionie/0.svg ></image>";
console.log(maChaine2.slice(19, -10));
      //console.log("bonjour"+ obj[4]);
      ( maChaine2);

      var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

// Dessiner une simple ligne
ctx.lineWidth = 20; 			// Epaisseur des formes


// On démarre un nouveau chemin
/*ctx.beginPath();
ctx.moveTo(0, 0);	// On déplace le curseur à la position x à 0 et y à 0
ctx.lineTo(150, 0); 	// On dessine une ligne qui part du curseur jusqu'à la position x à 10 et y à 0
ctx.stroke(); 	// On dessine le contour du chemin que nous avons créé (ici, une ligne)
*/

// Ici se trouvera la classe Personnage

class Hero {
  constructor(name, points, attack, defence, level, experience) {
    this.name = name;
    this.points = points;
    this.attack = attack;
    this.defence = defence;
    this.level = level;
    this.experience = experience;
    //this.src = src;
  }
}
class Weapon {
  constructor(name, points, attack, level, durability) {
    this.name = name;
    this.points = points;
    this.attack = attack;
    this.level = level;
    this.durability = durability;
  }
}
class Monster {
  constructor(name, points, attack, defence, level, speed) {
    this.name = name;
    this.points = points;
    this.attack = attack;
    this.defence = defence;
    this.level = level;
    this.speed = speed;
  }
}
class Objects {
  constructor(name, points, attack, defence, level, speed) {
    this.name = name;
    this.points = points;
    this.attack = attack;
    this.defence = defence;
    this.level = level;
    this.speed = speed;
  }
}


// appel de la méthode sayName()
//console.log(user.sayName());
var myPerso = [
  new Weapon("Baguette", 2, 3, 4, 5),
  new Weapon("Balai", 3, 1, 4, 4),
  new Weapon("Hat", 1, 3, 5, 2),
  new Weapon("Baton", 4, 3, 4, 5),
  new Hero("Hermionie", 8, 3, 5, 6, 3),
  new Hero("Dumbledore", 12, 5, 3, 6, 7),
  new Hero("Harry", 10, 3, 4, 2, 1),
  new Monster("Bellatrix", 5, 2, 4, 2, 4, 3),
  new Monster("Voldemort", 10, 8, 5, 7, 8, 10),
  new Monster("Draco", 2, 4, 6, 2, 5, 2),

];
console.log(myPerso[1]);
console.dir(myPerso);

  




/*function myFunction() {
  
    alert(" Choisissez votre adversaire");  
    document.getElementsById("monster").style.border = "5px solid red ";
         
    
  
}*/
/*var obj = document.getElementsByTagName("image");
*/
/*window.addEventListener("load", function(event) {
  var result = window.showModalDialog('modal.html');
  console.log(result);
  // Get the modal
var modal = document.getElementById('myModal').showModal();

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
  console.log("Toutes les ressources sont chargées !");
})*/

var obj = document.getElementsByTagName("svg");
console.log(obj);

/*do {
  alert(" Choisissez votre adversaire");           
  
} while (this == obj[7] || this == obj[8]);

do {
  alert(" Choisissez votre Hero");           
  
} while (this == obj[4] || this == obj[5] || this == obj[5]);*/

let monHtml;
for (var i = 0; i < obj.length; i++) {
  
  obj[i].addEventListener("click", function () {
    console.log("Hello " + this + " (" + this.innerHTML + ") from event listener [0]");
    //const monHtml;
    monHtml = this.innerHTML;
    //monHtml = monHtml.slice(19, -10);
    console.log(monHtml);
    /* Here, "this" refers to 1st div */
    if (this == obj[0]) {
      myWeap(this);

      /*obj[1].remove();
      obj[2].remove();
      obj[31].remove();*/

      console.log("bag bonjour");
    }
    else if (this == obj[1]) {
      myWeap(this);
      console.log("bag bienvenu");
      /*obj[0].remove();
      obj[1].remove();
      obj[2].remove();*/
    }
    else if (this == obj[2]) {
      myWeap(this);
      console.log("bag Hi");
      /*obj[0].remove();
      obj[1].remove();
      obj[2].remove();*/
    }
    else if (this == obj[3]) {
      myWeap(this);
      console.log("bag malvenu");
     
    }
  if (this == obj[4]) {
      myHero(this);

    }
    else if (this == obj[5]) {
      myHero(this);
      console.log("bienvenu");
      //obj[4].remove();
      //obj[5].remove();
    }
    else if (this == obj[6]) {
      myHero(this);
      console.log("Hi");
     // obj[4].remove();
      //obj[4].remove();
    }
    else if (this == obj[7]) {
      myMonstr(this);
      console.log("malvenu");
     
    }
    else if (this == obj[8]) {
      myMonstr(this);
      console.log("pire pour toi");
     
    }
    
  });
  /* do {
    alert(" Choisissez votre adversaire");           
    
  }  */
while (this == obj[7] || this == obj[8]);
}
Element.prototype.remove = function() {
  this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
  for(var i = this.length - 1; i >= 0; i--) {
      if(this[i] && this[i].parentElement) {
          this[i].parentElement.removeChild(this[i]);
      }
  }
}
function myWeap(obj) {
  obj.style.position = "absolute";
  obj.style.zIndex = "10";
  obj.style.bottom = "300px"; //or whatever 
  obj.style.left = "420px";

}
function myHero(obj) {
  
  monHtml;
  var newH = monHtml.slice(19, -11);
  var img = new Image();
  img.onload = function() {
  ctx.drawImage(img, 0, 0);
  if (!null){
    document.getElementById("player").remove();
   /*var myNode = document.getElementById("player");
   while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);*/
} 
      
};
console.log("toto"+monHtml+ newH);
console.log("toto"+ newH);
//img.src = monHtml.slice(19, -10);
img.src = newH;
 
}
function myMonstr(obj) {
 
  monHtml;
  var newH = monHtml.slice(19, -11);
  var img = new Image();
  img.onload = function() {
  ctx.drawImage(img, 0, 0);
  if (!null){
    document.getElementById("monster").remove();
    /*var sonNode = document.getElementById("monster");
   while (sonNode.firstChild) {
    sonNode.removeChild(sonNode.firstChild);*/
    //ar x = document.getElementById("");
   // x.remove(2);
   /* var el = document.getElementById('monster');
el.remove();*/
    //var elem = document.getElementById("");
    //elem.remove();
/*var nodeM = document.getElementById("monster");
var linkM = nodeM.parentNode;
//nodeM.childNodes = new Array();
linkM.removeChild(nodeM);*/
  }
};
console.log("toto"+monHtml+ newH);
console.log("toto"+ newH);

img.src = newH;
 
}

/*do {
  alert(" Choisissez votre adversaire");           
  
} while (this == obj[7] || this == obj[8]);

do {
  alert(" Choisissez votre Hero");           
  
} while (this == obj[4] || this == obj[5] || this == obj[5]);*/

