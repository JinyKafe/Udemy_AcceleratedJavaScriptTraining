function  Person(name, age) {
    this.name = name;
    this.age = age;
}

var maxPerson = new Person('Max', 30);
console.log(maxPerson);
var annaPerson = new Person('Anna');
console.log(annaPerson);