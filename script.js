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
console.log('Account name: ' + account._name);
account._name = 'new Account Name';
console.log('Account name: ' + account._name);
//
account.depose(2000);
account.withdraw(3000);