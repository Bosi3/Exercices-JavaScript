var selectElementsStartingWithA = function(array) {
    return ['apples', 'avocados'];
}

var selectElementsStartingWithVowel = function( strings) {
    let results = []

    for (let i = 0; i < strings.length; i++) {
      if ((strings[i].startsWith('a')) || (strings[i].startsWith('A')) || (strings[i].startsWith('e')) || (strings[i].startsWith('E')) || (strings[i].startsWith('i')) || (strings[i].startsWith('I')) || (strings[i].startsWith('o')) || (strings[i].startsWith('O')) || (strings[i].startsWith('u')) || (strings[i].startsWith('U'))) {
        results.push(strings[i])
      }
    }
    
    return results
}

var removeNullElements = function(array) {
    var r = array.filter(function(i){ return i != null; })
      //var filtered = array.filter(Boolean);
    return r;
}

var removeNullAndFalseElements = function(arr, val) {
    arr = arr.filter(function (n) { 
        return (n !== undefined && n !== null && n !== false  && n !== "" && isNaN()!=NaN); });
      return arr;
    }
  



var reverseWordsInArray = function(str) {
    return str === str.split('').reverse().join('');
}

var everyPossiblePair = function(arr) {
    arr.sort();
        var res = [],
            l = arr.length;
        for(var i=0; i<l; ++i)
            for(var j=i+1; j<l; ++j)
                
    //res1 = res(push([arr[i], arr[j]])) ;
   res.push([arr[i], arr[j]]); 
        return  res;
    }

var allElementsExceptFirstThree = function(array) {
    array.splice(0, 3);
    return array;
}

var addElementToBeginning = function(array, element) {
    array.unshift(1);
    return array;
}

var sortByLastLetter = function(array) {
    var sorted = array.sort(function(a, b) {

        if (a[a.length - 1] > b[b.length - 1])
            return 1;
        else if (a[a.length - 1] < b[b.length - 1])
            return -1;    
        return 0;   
    })   
    return sorted;
}

var getFirstHalf = function(str) {
    var demi = str.length+1;  
      return str.slice(0, demi / 2);
    }
   

var makeNegative = function(num) {
    return -Math.abs(num);
    //return 'Write your method here';
}

var numberOfPalindromes = function(s){ 
    let count = 0; for(let i=0, j=string.length-1; i<j; ) 
    if(string.charAt(i++) === string.charAt(j--)) ++count; 
    return count; 
}

    


var shortestWord = function(arr) {
    const shorter = (left, right) => left.length <= right.length ? left : right
        return arr.reduce(shorter)
      
}

var longestWord = function(arr) {

  return arr.reduce((a, b) => a.length < b.length ? b : a, "");
}


var sumNumbers = function(array) {
    return array.reduce((a, b) => a + b);
}

var repeatElements = function(arr) {
    var arr1 =arr.concat(arr);
return arr1;
    }

var stringToNumber = function(string) {
    
    return parseInt(string);
}

var calculateAverage = function(elmt) {
    var sum = 0;
for( var i = 0; i < elmt.length; i++ ){
    sum += parseInt( elmt[i], 10 ); //don't forget to add the base
}

var avg = sum/elmt.length;
    return avg;
}

var getElementsUntilGreaterThanFive = function(array) {
    return array.slice(0, 6);
}

var convertArrayToObject = function(arr) {
    var rv = {};
    for (var i = 0; i < arr.length; i+=2)
      rv[arr[i]] = arr[i+1];
    return rv;
}
  
var getAllLetters = function(arr) {
    /*counts = [];

arr = arr.join("").split(""); // transforms the initial array into array of single characters
arr.sort();
arr.forEach((v) => (counts[v] = (counts[v])));

return counts; */
}
  
var swapKeysAndValues = function(data) {
    var newData = Object.keys(data).reduce(function(obj,key){
        obj[ data[key] ] = key;
        return obj;
     },{});
     return newData;
   // return 'Write your method here';
}

var sumKeysAndValues = function(obj) {
    var sum = 0;
for(var key in obj){
    console.log( parseInt(key));
  sum += parseInt(obj[key]) ;
  sum += parseInt(key);
  }
return sum;
}

var removeCapitals = function(str) {
    return str.replace(/[A-Z]/g, "");
}

var roundUp = function(number) {
    return Math.ceil(number) ;
}

var formatDateNicely = function(inputFormat) {
    function pad(s) { return (s < 10) ? '0' + s : s; }
  var d = new Date(inputFormat);
  return [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join('/');
}

var getDomainName = function(string) {
    
    var domain = string.replace(/.*@/, "");
    domain.substring(".com");
    return domain;
}

var titleize = function(string) {
    return 'Write your method here';
}

var checkForSpecialCharacters = function(string) {
    return 'Write your method here';
}

var squareRoot = function(number) {
    return Math.sqrt(number);
}

var factorial = function(num) {
    if(num === 0 || num === 1){
        return 1;
        }
        for(var i = num -1; i >= 1; i--){
        num = num * i;
        }
        return num;
}

var findAnagrams = function(str) {
    if (!str) {
        return;
    }
    str = str.split('');
    str = str.sort();
    str = str.join('');
    return str;
}



function getGroupedAnagrams(words){
    const anagrams = {}; // {abc:[abc,cba], dell:[dell, ledl]}
    words.forEach((word)=>{
        const sortedWord = sortStrChars(word);
        if (anagrams[sortedWord]) {
            return anagrams[sortedWord].push(word);
        }
        anagrams[sortedWord] = [word];
    });
    return anagrams;

}




var convertToCelsius = function(valNum) {
    valNum = parseFloat(valNum);
    return Math.round((valNum-32) / 1.8);
     
}

var letterPosition = function(array) {
    return 'Write your method here';
}