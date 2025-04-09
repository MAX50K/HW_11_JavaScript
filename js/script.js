// 1
const bankAccount = {
    ownerName: "David",
    accountNumber: 11029303,
    balance: 2000,


deposit(amount) {
    this.balance += amount
    console.log(`Deposit complete! New balance: ${this.balance} $`);
},

withdraw(amount1) {
    this.balance -= amount1
    console.log(`Withdraw complete! New balance: ${this.balance} $`);
}
}
if (confirm("Do you want to deposit money?")) {
    let amount = parseFloat(prompt("Enter the amount:"));
    if (!isNaN(amount) && amount > 0) {
      bankAccount.deposit(amount);
    } else {
      alert("Wrong amount.");
    }
}
 if (confirm("Do you want top withdraw money?")) {
    let amount = parseFloat(prompt("Enter the amount:"));
    if (!isNaN(amount) && amount > 0) {
      bankAccount.withdraw(amount);
    } else {
      alert("Невірна сума.");
    }
}
// 2

let temp = parseFloat(prompt("Enter the temperature in celcium:"));

const weather = {
    tempCelc: temp,
    humidity: 62,
    windSpeedMph: 4.8,

    checkTemp(temp) {
        if (temp => 0){
             return false
        } else {
            return true
        }
    }
}


if (weather.checkTemp()) {
    alert("The temperature is under 0 celcium");
  } else {
    alert("The temperature is above or 0 celcium");
  }
// 3

const enterEmail = prompt("Enter the password:")

const user = {
    name: "Max",
    email: "skibidi69@gmail.com",
    password: "gyayatMewing21",

    login(enterEmail) {
        if (enterEmail == this.password) {
            console.log(`Welcome back, ${this.name}`);
        } else {
            console.log("Wrong password");
        }
    }
}

console.log(login);