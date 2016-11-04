function fn(message) {
    console.log(message + this);
}

var obj = {
    objFn: fn
};
var person = {name: 'Max'};
obj.objFn.call(person, 'Hello');