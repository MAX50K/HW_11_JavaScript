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

let weather = {
  temperature: temp,
  humidity: 60,
  windSpeed: 15,

  isUnderZero() {
    return this.temperature < 0;
  }
};

if (weather.isUnderZero()) {
    alert("The temperature is under 0 celcium");
  } else {
    alert("The temperature is above or 0 celcium");
  }
// 3

const enterPassword = prompt("Enter the password:")

const user = {
    name: "Max",
    email: "skibidi69@gmail.com",
    password: "gyayatMewing21",

    login() {
        if (enterPassword == this.password) {
            console.log(`Welcome back, ${this.name}`);
        } else {
            console.log("Wrong password");
        }
    }
}

console.log(user.login());
// 4
const movie = {
  title: "Dingo",
  director: "Johny Alan",
  year: 2019,
  rating: 8.7,

  isAboveEight() {
    return this.rating > 8
  }
}

if (movie.isAboveEight()) {
  alert("The rating is above 8");
} else {
  alert("The tating is under 8");
}