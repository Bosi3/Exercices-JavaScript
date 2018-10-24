var maChaine2 = "<image xlink:href= images/Hermionie/0.svg ></image>";
console.log(maChaine2.slice(19, -10));
//console.log("bonjour"+ obj[4]);
(maChaine2);

var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

// Dessiner une simple ligne
//ctx.lineWidth = 20; 			// Epaisseur des formes


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

var obj = document.getElementsByTagName("svg");
console.log(obj);


let monHtml;
for (var i = 0; i < obj.length; i++) {

  obj[i].addEventListener("click", function () {
    console.log("Hello " + this + " (" + this.innerHTML + ") from event listener [0]");
    //const monHtml;
    monHtml = this.innerHTML;
    console.log(monHtml);
    if (this == obj[0]) {
      myWeap(this);
      console.log("bag bonjour");
    }
    else if (this == obj[1]) {
      myWeap(this);
      console.log("bag bienvenu");
    }
    else if (this == obj[2]) {
      myWeap(this);
      console.log("bag Hi");
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
    }
    else if (this == obj[6]) {
      myHero(this);
      console.log("Hi");
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
    
  }  
while (this == obj[7] || this == obj[8]);
}*/
  Element.prototype.remove = function () {
    this.parentElement.removeChild(this);
  }
  NodeList.prototype.remove = HTMLCollection.prototype.remove = function () {
    for (var i = this.length - 1; i >= 0; i--) {
      if (this[i] && this[i].parentElement) {
        this[i].parentElement.removeChild(this[i]);
      }
    }
  }

  function myWeap(obj) {
   /* monHtml;
    var newH = monHtml.slice(19, -11);
    var x = 30;
    var y = 30;
    var width = 50;
    var height = 40;
    var img = new Image();
    img.onload = function () {
      ctx.drawImage(img, x, y, width, height);
    };*/
    if (!null) {
      document.getElementById("kiosk").outerHTML = "";

    };
    /*console.log("toto" + monHtml + newH);
    console.log("toto" + newH);*/
    //img.src = monHtml.slice(19, -10);
    //img.src = newH;
  };

  function myHero(obj) {

    monHtml;
    var newH = monHtml.slice(19, -11);
    var x = 30;
    var y = 30;
    var width = 30;
    var height = 40;
    var img = new Image();
    img.onload = function () {
      ctx.drawImage(img, x, y, width, height);
    };
    if (!null) {
      document.getElementById("player").outerHTML = "";

    };
    console.log("toto" + monHtml + newH);
    console.log("toto" + newH);
    //img.src = monHtml.slice(19, -10);
    img.src = newH;
  };
  function myMonstr(obj) {

    monHtml;
    var newH = monHtml.slice(19, -11);
    var x = 230;
    var y = 30;
    var width = 50;
    var height = 40;
    var img = new Image();
    img.onload = function () {
      ctx.drawImage(img, x, y, width, height);
    };
    if (!null) {
      document.getElementById("monster").remove();

    };
    console.log("toto" + monHtml + newH);
    console.log("toto" + newH);

    img.src = newH;

  }
};
//------------------KEYDOWN-----------
var keyMap = {
  68: 'right',
  65: 'left',
  87: 'up',
  83: 'down'
}
function keydown(event) {
  var key = keyMap[event.keyCode]
  state.pressedKeys[key] = true
}
function keyup(event) {
  var key = keyMap[event.keyCode]
  state.pressedKeys[key] = false
}

window.addEventListener("keydown", keydown, false)
window.addEventListener("keyup", keyup, false)

function update(progress) {
  if (state.pressedKeys.left) {
    state.x -= progress
  }
  if (state.pressedKeys.right) {
    state.x += progress
  }
  if (state.pressedKeys.up) {
    state.y -= progress
  }
  if (state.pressedKeys.down) {
    state.y += progress
  }

  // Flip position at boundaries
  if (state.x > width) {
    state.x -= width
  }
  else if (state.x < 0) {
    state.x += width
  }
  if (state.y > height) {
    state.y -= height
  }
  else if (state.y < 0) {
    state.y += height
  }
}
function update(progress) {
  // Make a smaller time value that's easier to work with
  var p = progress / 16

  updateRotation(p)
  updateMovement(p)
  updatePosition(p)
}

function updateRotation(p) {
  if (state.pressedKeys.left) {
    state.rotation -= p * 5
  }
  else if (state.pressedKeys.right) {
    state.rotation += p * 5
  }
}

function updateMovement(p) {
  // Behold! Mathematics for mapping a rotation to it's x, y components
  var accelerationVector = {
    x: p * .3 * Math.cos((state.rotation-90) * (Math.PI/180)),
    y: p * .3 * Math.sin((state.rotation-90) * (Math.PI/180))
  }

  if (state.pressedKeys.up) {
    state.movement.x += accelerationVector.x
    state.movement.y += accelerationVector.y
  }
  else if (state.pressedKeys.down) {
    state.movement.x -= accelerationVector.x
    state.movement.y -= accelerationVector.y
  }

  // Limit movement speed
  if (state.movement.x > 40) {
    state.movement.x = 40
  }
  else if (state.movement.x < -40) {
    state.movement.x = -40
  }
  if (state.movement.y > 40) {
    state.movement.y = 40
  }
  else if (state.movement.y < -40) {
    state.movement.y = -40
  }
}

function updatePosition(p) {
  state.position.x += state.movement.x
  state.position.y += state.movement.y

  // Detect boundaries
  if (state.position.x > width) {
    state.position.x -= width
  }
  else if (state.position.x < 0) {
    state.position.x += width
  }
  if (state.position.y > height) {
    state.position.y -= height
  }
  else if (state.position.y < 0) {
    state.position.y += height
  }
}
/*do {
  alert(" Choisissez votre adversaire");           
  
} while (this == obj[7] || this == obj[8]);

do {
  alert(" Choisissez votre Hero");           
  
} while (this == obj[4] || this == obj[5] || this == obj[5]);*/

