var ctx = document.getElementById("canvas").getContext("2d");

// Dessiner une simple ligne
ctx.lineWidth = 20; 			// Epaisseur des formes
ctx.strokeStyle = "red"; 	// Couleur du contour
ctx.fillStyle = "rgba(50, 230, 100, 0.5)"; 	// Couleur du contenu
//ctx.fillStyle = 'rgb(200,0,0)'; // sets the color to fill in the rectangle with
ctx.fillRect(10, 10, 55, 50);

// On démarre un nouveau chemin
ctx.beginPath();
ctx.moveTo(0, 0);	// On déplace le curseur à la position x à 0 et y à 0
ctx.lineTo(150, 0); 	// On dessine une ligne qui part du curseur jusqu'à la position x à 10 et y à 0
ctx.stroke(); 	// On dessine le contour du chemin que nous avons créé (ici, une ligne)
ctx.closePath();

class Player {
    constructor(name, points, attack, defence, level, experience) {
        this.name = name;
        this.points = points;
        this.attack = attack;
        this.defence = defence;
        this.level = level;
        this.experience = experience;
    }
}
var ctx = document.getElementById("canvas").getContext("2d");

// Dessiner une simple ligne
ctx.lineWidth = 20; 			// Epaisseur des formes
ctx.strokeStyle = "red"; 	// Couleur du contour
ctx.fillStyle = "rgba(50, 230, 100, 0.5)"; 	// Couleur du contenu

// On démarre un nouveau chemin
ctx.beginPath();
ctx.moveTo(0, 0);	// On déplace le curseur à la position x à 0 et y à 0
ctx.lineTo(150, 0); 	// On dessine une ligne qui part du curseur jusqu'à la position x à 10 et y à 0
ctx.stroke(); 	// On dessine le contour du chemin que nous avons créé (ici, une ligne)
class Player {
    constructor(name, points, attack, defence, level, experience) {
        this.name = name;
        this.points = points;
        this.attack = attack;
        this.defence = defence;
        this.level = level;
        this.experience = experience;
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
let Harry = new Player("Harry", 10, 3, 4, 2, 1);
let Hermionie = new Player("Hermionie", 8, 3, 5, 6, 3);
let Dumbledore = new Player("Dumbledore", 12, 5, 3, 6, 7);
let Bellatrix = new Monster("Bellatrix", 5, 2, 4, 2, 4, 3);
let Draco = new Monster("Draco", 2, 4, 6, 2, 5, 2);
let Voldemort = new Monster("Voldemort", 10, 8, 5, 7, 8, 10);
console.log(Hermionie, Voldemort);
console.dir(Harry);
var Beaver = function(x, y) {
    this.x = x;
    this.y = y;
    this.img = getImage("images/Hermionie/0.svg");
    this.sticks = 0;
};

Beaver.prototype.draw = function() {
    this.y = constrain(this.y, 0, height-50);
    image(this.img, this.x, this.y, 40, 40);
};

Beaver.prototype.hop = function() {
    this.img = getImage("images/Hermionie/0.svg");
    this.y -= 5;
};

Beaver.prototype.fall = function() {
    this.img = getImage("images/Hermionie/0.svg");
    this.y += 5;
};

Beaver.prototype.checkForStickGrab = function(stick) {
    if ((stick.x >= this.x && stick.x <= (this.x + 40)) &&
        (stick.y >= this.y && stick.y <= (this.y + 40))) {
        stick.y = -400;
        this.sticks++;
    }
};

var Stick = function(x, y) {
    this.x = x;
    this.y = y;
};

Stick.prototype.draw = function() {
    fill(89, 71, 0);
    rectMode(CENTER);
    rect(this.x, this.y, 5, 40);
};

var beaver = new Beaver(200, 300);

var sticks = [];
for (var i = 0; i < 40; i++) {  
    sticks.push(new Stick(i * 40 + 300, random(20, 260)));
}

var grassXs = [];
for (var i = 0; i < 25; i++) { 
    grassXs.push(i*20);
}

draw = function() {
    
    // static
    background(227, 254, 255);
    fill(130, 79, 43);
    rectMode(CORNER);
    rect(0, height*0.90, width, height*0.10);
    
    for (var i = 0; i < grassXs.length; i++) {
        image(getImage("cute/GrassBlock"), grassXs[i], height*0.85, 20, 20);
        grassXs[i] -= 1;
        if (grassXs[i] <= -20) {
            grassXs[i] = width;
        }
    }
    
    for (var i = 0; i < sticks.length; i++) {
        sticks[i].draw();
        beaver.checkForStickGrab(sticks[i]);
        sticks[i].x -= 1;
    }
     
    
    if (keyIsPressed && key.code === 32) {
        beaver.hop();
    } else {
        beaver.fall();
    }
    beaver.draw();
};



/*
create a class Objects for consumable objects that have various effects on your enemy or the character (like potions)
give a sprite to the different element of your games like weapons and monsters. You can find an interesting exemples "here"
Create a system to save the game using localStorage

o do so, you will need to create a class Player who has :
a name
life points
basic attack points
basic defence points
a level
a attack speed (he will attack every X second)
a namelife pointsbasic attack pointsbasic defence pointsa levelexperience points
You will need to create a class Weapon who has :

a name
an attack point
a use level (meaning that the player needs to have a certain level to use it)
a durability (the weapon will be destroyed after a certain number of uses)
You will need to create a class Monster who has :

*/