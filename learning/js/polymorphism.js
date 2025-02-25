//Super classe

function Account(agency,account,balance) {
    this.agency = agency;
    this.account = account;
    this.balance = balance;
}
//criando o método sacar
Account.prototype.withdraw = function(value){
    if(this.balance < value ) {
        console.log('Insulfficent balance')
        this.viewBalance();
        return;
    }
    this.balance -= value
    this.viewBalance();
};
//criando o método depositar
Account.prototype.deposit = function(value){
    this.balance += value;
    this.viewBalance();
};
//criando o método ver saldo
Account.prototype.viewBalance = function() {
    console.log(`Ag/c: ${this.agency}/${this.account} balance: R$${this.balance.toFixed(2)}`)
};
//criando um objeto "accountVictor"
const accountVictor = new Account(10,22,200)

function currentAccount(agency,account,balance,limit){
    Account.call(this,agency,account,balance);
    this.limit = limit
}
currentAccount.prototype =  Object.create(Account.prototype);
currentAccount.prototype.constructor = currentAccount;

currentAccount.prototype.withdraw = function(value){
    if(value > (this.balance + this.limit) ) {
        console.log('Insulfficent balance')
        this.viewBalance();
        return;
    }
    this.balance -= value
    this.viewBalance();
};

const cc = new currentAccount(11,22,0,100);
cc.deposit(150)
cc.withdraw(251)