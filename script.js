function Person() {
    this.name = 'Max';
}

Person.prototype.greet = function () {
    console.log('Hello ' + this.name);
};

var person = new Person();

person.greet();