// Store all the transactions in Array
const transactions : number[] = [50000, -2000, 3000, -15000, -200, -300, 4000, -3000]

let totalTransactions : number = 0;

for(let amount of transactions){

    if(amount>0){
        console.log("Credit: " + amount)
    }else {
        console.log("Debit: " +amount)
    }
    totalTransactions++;
}

console.log(totalTransactions);
// Print total Credited and debited amount

let totalCredit : number = 0;
let totalDebit : number = 0;
for(let amount of transactions){
    if(amount>0){
        totalCredit += amount;
    }else{
        totalDebit += amount;
    }

}
console.log("Total amount credited: " + totalCredit);
console.log("Total amount debited : " + totalDebit);


// Remaining amount in bank account

let remainingAmount : number = 0;
remainingAmount = totalCredit + totalDebit;
console.log("Remaining Amount in account: " +remainingAmount);

// Print the suspicious transactions

let suspiciousCount : number = 0;

for(let amount of transactions){
    if(amount >= 10000 || amount <= -10000){
        console.log(`Suspicious credit/debit Transaction: ${amount}`);
        suspiciousCount++;
    }
}

console.log("Suspicious Count: " +suspiciousCount);

