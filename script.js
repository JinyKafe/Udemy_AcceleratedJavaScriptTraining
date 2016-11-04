function Person() {
    this.name = 'Max';
    this.greet = function () {
        console.log('Hello from within constructor, ' + this.name + ' ' + this.surname);
    };
}

Person.prototype.greet2 = function () {
    console.log('Hello ' + this.name + ' ' + this.surname);
};

var person = new Person();
person.name = 'Jan';

Person.prototype.name = 'WontApply'; /* prototype is one level higher. Does not override constructor fields*/
Person.prototype.surname = 'Kotek';

var max = new Person();

person.greet();
person.greet2();
max.greet();
max.greet2();