function fn() {
    console.log(this);
}

var obj = {
    objFn: fn
};
obj.objFn.bind(this)();