/*Lecture 76 - Build in methods and properties*/

function messageFn(message, number, someOtherArg) {
    console.log(message);
    console.log(number);
    console.log(arguments); // 1. you can access function arguments
}

// 2. you can access the function and it's properties from outside
messageFn('Hi!', 10);
console.log('Function name: ' + messageFn.name);
console.log('Nr. of expected argument: ' + messageFn.length);

// 3. situation - you cannot access name of anonymous function
var anonymousFn = function (message) {
    console.log(this.name); // this does not refer to function but to outer application container
};
anonymousFn('Hi!');