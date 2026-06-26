let customerName : string = "John Doe";
let creditScore : number = 640;
let income : number = 55000.0;
let isEmployed : boolean = true;
let debtToIncomeRatio : number = 35.0;


if(creditScore > 750){
    console.log("the loan is automatically approved.");
}
else if(creditScore >= 650 && creditScore <=750){
    console.log("additional checks are performed.");

    // Income check
    if(income >= 50000){
        
        // Employment check
        if(debtToIncomeRatio < 40){

            console.log("Loan is approved, because DTI is less than 40%.");
        }else if(debtToIncomeRatio > 40){

            console.log("Loan Status: Denied");
            console.log("Reason: Debt-to-Income Ratio is 40% or greater.");     
           }
         else if(isEmployed = false){
            console.log("Customer is Unemployed, so loan is denied.");
         }

         else if(income < 50000) {
            
            console.log("loan is denied. Reason: Income is less than $50,000.");
        }
    }
}

    else{
        console.log("Loan Status: Denied");
        console.log("Reason: Credit score is below 650.");
    }

        
