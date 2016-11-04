function fn() {
    console.log(this);
}

var obj = {
    objFn: fn
};
var person = {name: 'Max'};
obj.objFn.bind(person)();