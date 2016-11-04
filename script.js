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
    value: 'Default'
    //writeable: false // default value
});
console.log('Account name: ' + account._name);
account._name = 'new Account Name'; // !!! unable to override since writeable: fale
console.log('Account name: ' + account._name);
//
account.depose(2000);
account.withdraw(3000);