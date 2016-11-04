/*There are 4 ways to create object*/
/*1. create Object instance and set new variables*/
var person1 = {name: 'Max'};
console.log(person1);
console.log(person1 instanceof Object);

/*2. the same like above (but more messy). Create Object instance and set new variables*/
var person2 = new Object();
person2.name = 'Max';
console.log(person2);
console.log(person2 instanceof Object);

/*3. create instance from prototype (can be also null )*/
var person3 = Object.create(null);
person3.name = 'Max';
console.log(person3);
console.log(person3 instanceof Object);
//
var person4 = Object.create(Object);
person4.name = 'Max';
console.log(person4);
console.log(person4 instanceof Object);

/*4. using constructor function*/
function Person () {
    this.name = 'Max';
}
var person5 = new Person();
console.log(person5);
console.log(person5 instanceof Object);
console.log(person5 instanceof Person);
