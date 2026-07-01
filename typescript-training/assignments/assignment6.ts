// Define the number

let n : number = 8;
let flag : boolean = false;

for(let i : number = 2; i<n; i++){
    if(n%i==0){
        flag = true;
        break;
    }
    }
    if(flag==false){
        console.log("Prime number: " +n)

    }else{
        console.log("Not a Prime number: " +n)
    }
