var age = 2;

var person = {
    name: 'Max',
    age: 27,
    kids: {
        name: 'baruska'
    }
};

Object.prototype.greet = function () {
    console.log('hello there');
};

var max = Object.create(person);

max.greet();

console.log(Object.getPrototypeOf(max) == person);
