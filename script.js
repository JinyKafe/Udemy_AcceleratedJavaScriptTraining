function fn(message) {
    console.log(message + this);
}

var obj = {
    objFn: fn
};
var person = {name: 'Max'};
obj.objFn.bind(person, 'Hello')();
obj.objFn.call(person, 'Hello');
obj.objFn.apply(person, ['Hello']);