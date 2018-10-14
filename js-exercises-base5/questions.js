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
    // Remplacer le premier e de la chaine par un espace
    // str= returnValue(/^c/, /^\s/);
    //expect(str).toEqual(str);
    if(str){
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
if(str){
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
var SupprEspaceString = function (texte) {

}
var IsString = function (texte) {

}

var AfficherExtensionString = function (texte) {

}
var NombreEspaceString = function (texte) {

}
var InverseString = function (texte) {

}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
var calculPuissance = function (x, y) {

}
var valeurAbsolue = function (result) {
    expect(Math.abs).toEqual(5);
}
var valeurAbsolueArray = function (array) {

}
var sufaceCercle = function (rayon) {

}
var hypothenuse = function (ab, ac) {

}
var calculIMC = function (poids, taille) {

}
/*Important
Il faut lancer le fichier SpecRunner.html pour valider ses réponses.
Les réponses seront à écrire dans le fichier questions.js*/