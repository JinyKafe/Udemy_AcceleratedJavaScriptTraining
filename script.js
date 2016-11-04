var age = 2;

var person = {
    name: 'Max',
    age: 27,
    kids: {
        name: 'baruska'
    }
};

Object.prototype.greet = function () {
    console.log('hello there, my name is ' + this.name);
};

var max = Object.create(person);

max.greet();

console.log(Object.getPrototypeOf(max) == person);
console.log(person.name);
