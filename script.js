var account = {
    cash: 12000,
    _name: 'Default',
    withdraw: function (amount) {
        this.cash -= amount;
        console.log('Withdrew ' + amount + '. Remains ' + this.cash);
    },
    /*    depose: function (amount) {
     this.cash += amount;
     console.log('Deposed ' + amount + '. Remains ' + this.cash);
     }*/
};

Object.defineProperty(account, 'depose', {
    value: function (amount) {
        this.cash += amount;
        console.log('Deposed ' + amount + '. Remains ' + this.cash);
    }
});

Object.defineProperty(account, 'name', {
    get: function () {
        return 'fakedName';
    },
    set: function (name) {
        this._name = name
    }
});
console.log('Account _name directly: ' + account._name); // direct access
account.name = 'new Name';
console.log('Account _name directly after change: ' + account._name); // direct access
console.log('Account name via getter: ' + account.name); // using getter
account._name = 'new Account Name'; // we can override the variable since writable:true
console.log('Account name: ' + account._name);
//
account.depose(2000);
account.withdraw(3000);