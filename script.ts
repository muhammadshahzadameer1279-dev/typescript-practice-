// Variables
var accountHolder: string = "Ali Khan";
var balance: number = 1000;
var pin: number = 1234;

// User entered data (example values)
var enteredPin: number = 1234;
var transactionType: string = "withdraw"; // options: check, deposit, withdraw
var amount: number = 300;

// Welcome message using concatenation
console.log("Welcome " + accountHolder + " to ATM Machine");

// PIN check using if condition
if (enteredPin === pin) {

    console.log("PIN correct");

    // if–else-if condition for transaction type
    if (transactionType === "check") {

        console.log("Your balance is: " + balance);

    }
    else if (transactionType === "deposit") {

        // operator +
        balance = balance + amount;

        console.log("Deposit amount: " + amount);
        console.log("New balance is: " + balance);

    }
    else if (transactionType === "withdraw") {

        // if–else condition inside else-if
        if (amount <= balance) {

            balance = balance - amount;

            console.log("Withdraw amount: " + amount);
            console.log("Remaining balance: " + balance);

        }
        else {

            console.log("Insufficient balance");

        }

    }
    else {

        console.log("Invalid transaction type");

    }

}
else {

    console.log("Incorrect PIN");

}

// Comparison operators example
if (balance > 500) {
    console.log("Your balance is greater than 500");
}
else if (balance === 500) {
    console.log("Your balance is exactly 500");
}
else {
    console.log("Your balance is less than 500");
}

