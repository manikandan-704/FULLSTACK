class Encapsulation {
    #mark;                 //private variable
    setMark(mark) {
        this.#mark = mark;
    }
    getMark() {
        return this.#mark;
    }
}
const s1 = new Encapsulation();
s1.setMark(85);
console.log(s1.getMark());


class Account {
    #bal = 0;
    setDeposit(amt) {
        if (amt < 1000 || amt === 0) {
            return console.log("Minimum deposite should be $1000");
        }
        if (amt === "" || typeof amt !== "number") {
            return console.log("Enter the deposit amount");
        }
        this.#bal += amt;
        console.log(`Amount is Deposited $${amt}`);
    }
    getBal() {
        return this.#bal;
    }
}
const user = new Account();
user.setDeposit(0);
user.setDeposit(1000);
user.setDeposit("abc");
user.setDeposit(1050);
user.setDeposit(1500);
user.setDeposit(3500);
user.setDeposit(0);
console.log(`BALANCE: ${user.getBal()}`);
