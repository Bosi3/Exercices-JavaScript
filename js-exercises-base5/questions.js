/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
var tailleString = function (str) {


    {
        var id = this.task.get("id");

        expect(id).toEqual(jasmine.any(Number));
        expect(id).toBeGreaterThan(30);
        expect(Math.trunc(id)).toEqual(id);
    }

};

var remplaceECar = function (str) {

    if (str) {
        return str.replace(/e/, " ");
    }

    // var res = str.replace(/^/, );
}
var concatString = function (str1, str2) {
    return str1.concat(str2);
}
var afficherCar5 = function (str) {
    if (str) {
        return str.charAt(4);
    }
}
var afficher9Car = function (str) {
    if (str) {
        return str.substr(0, 9);
    }
}
var majusculeString = function (str) {

    if (str) {
        return str.toUpperCase();
    }
}
var minusculeString = function (str) {
    if (str) {
        return str.toLowerCase();
    }
}
var SupprEspaceString = function (str) {
    if (str) {
        return str.trim();
    }
}
var IsString = function (str) {
    if (typeof str === 'string') {
        // Faire quelque chose
        return true;
    }
}

var AfficherExtensionString = function (str) {
    if (str) {
        return str.split('.').reverse()[0];
    }
}

var NombreEspaceString = function (str) {
    if (str) {
        return str.split(' ').length - 1;
    }
}
var InverseString = function (str) {
    if (str) {
        return str.split('').reverse().join('');
    }
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
var calculPuissance = function (x, y) {
    if (x, y) {
        return Math.pow(x, y)
    }
}
var valeurAbsolue = function (x) {
    if (x) {
        return Math.abs(x);
    }
}
var valeurAbsolueArray = function (arr) {
    var dups = [];
    for (var i = 0; i < arr.length; i++) {
        var el = arr[Math.abs(arr[i])];
        if (el > 0) { arr[Math.abs(arr[i])] = -arr[Math.abs(arr[i])]; }
        else if (el === 0) { arr[Math.abs(arr[i])] = -arr.length; }
        else {
            if (Math.abs(arr[i]) === arr.length) { dups.push(0); }
            else { dups.push(Math.abs(arr[i])); }
        }
    }
    return dups;
}


var sufaceCercle = function (r) {
    if (r) {
        var ry = Math.PI * (r * r);
        return Math.ceil(ry);
    }
}
var hypothenuse = function (ab, ac) {
    if (ab, ac) {
        return Math.hypot(ab, ac);
    }
}
var calculIMC = function (poids, taille) {
    if (poids, taille) {
        var imc = (parseFloat((poids / (taille * taille))));
        var fix = parseFloat(imc).toFixed(2);
        return Number(fix);
    }
}
/*Important
Il faut lancer le fichier SpecRunner.html pour valider ses réponses.
Les réponses seront à écrire dans le fichier questions.js*/