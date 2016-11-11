/* Closures are annonymous functions within another function.
* It has access to it's parent function variables*/

function generator(input) {
    var number = input;
    return function () {
        return number * 2;
    };
}

var calc = generator(900);
var anotherClosure = generator(1000);
console.log(calc());
console.log(anotherClosure());