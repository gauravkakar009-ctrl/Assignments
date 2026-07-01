// Assign "n" a value
    let n : number = 6;

// Set Flag as False
    let flag : boolean = false;

// Run the for loop starting from 2 as from 1 every number is divided to check if "n" is divided by any number.
    for(let i : number = 2; i<n; i++){
        if(n%i==0){
            flag = true;
            break;
        }
    }

// if-else condition to print the number if it is prime or not a prime.
    if(flag==false){
        console.log("Prime number: " +n);
    }else{
        console.log("Not a Prime number: " +n )
    }


