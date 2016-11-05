var person = {
    name: 'Max',
    age: 27,
    greet: function () {
        console.log('Hello');
    }
};

console.log(person);
delete person.name; // delete variable
console.log(person);
//
// check presence of variable
console.log('age' in person);
//
// looping all person's fields
for (var obj in person) {
    console.log(obj);
}
