var account = {
    cash: 12000,
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

Object.defineProperty(account, '_name', {
    value: 'Default',
    //writable: false // default value
    writable:true
});
console.log('Account name: ' + account._name);
account._name = 'new Account Name'; // we can override the variable since writable:true
console.log('Account name: ' + account._name);
//
account.depose(2000);
account.withdraw(3000);