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
    return str == str.split('').reverse().join('');
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

var numberOfPalindromes = function(arr) {
    for (var i = 0; i < arr.length; i++) {
        palindromize(arr[i]);
    }
    //return result;
    return palindromize.length;
 
    }


var shortestWord = function(array) {
    return 'Write your method here';
}

var longestWord = function(array) {
    return 'Write your method here';
}

var sumNumbers = function(array) {
    return 'Write your method here';
}

var repeatElements = function(array) {
    return 'Write your method here';
}

var stringToNumber = function(string) {
    return 'Write your method here';
}

var calculateAverage = function(array) {
    return 'Write your method here';
}

var getElementsUntilGreaterThanFive = function(array) {
    return 'Write your method here';
}

var convertArrayToObject = function(array) {
    return 'Write your method here';
}

var getAllLetters = function(array) {
    return 'Write your method here';
}

var swapKeysAndValues = function(object) {
    return 'Write your method here';
}

var sumKeysAndValues = function(object) {
    return 'Write your method here';
}

var removeCapitals = function(string) {
    return 'Write your method here';
}

var roundUp = function(number) {
    return 'Write your method here';
}

var formatDateNicely = function(date) {
    return 'Write your method here';
}

var getDomainName = function(string) {
    return 'Write your method here';
}

var titleize = function(string) {
    return 'Write your method here';
}

var checkForSpecialCharacters = function(string) {
    return 'Write your method here';
}

var squareRoot = function(number) {
    return 'Write your method here';
}

var factorial = function(number) {
    return 'Write your method here';
}

var findAnagrams = function(string) {
    return 'Write your method here';
}

var convertToCelsius = function(number) {
    return 'Write your method here';
}

var letterPosition = function(array) {
    return 'Write your method here';
}
