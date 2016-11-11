/*IIFEs are local functions. Good for not polluting global scope with variables. */

// 1. situation one - IIFE without parameter
(function calc() {
    var message = 'Calc'; // message is local to this function only
    console.log(message);
})();
// console.log(message); // throws error 'message' is not defined

// 2. situation - IIFE with parameter
(function calc(input) {
    var number = input;
    console.log(number);
})(10);

// 3. situation: populating external object
var obj = {};
(function (input) {
    input.name = 'Max';
})(obj);
console.log(obj);