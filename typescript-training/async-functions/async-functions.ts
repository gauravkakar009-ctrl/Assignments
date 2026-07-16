//Asynchronous functions with promise

//Normal function to generate random numbers between 0 and 1.
function randomNumber(): number {
    return Math.random();

}

console.log(randomNumber());

//Now I want to generate a random number with some expectation like random number should be greater than 0.5.

async function getRandomNumber(): Promise<number> {
    return new Promise((resolve, reject) => {
        const random: number = Math.random();
        console.log(random);
        if (random > 0.5) {
            resolve(random);
        } else {
            reject(new Error(`Random number ${random} is less than 0.5.`));
        }


    })

}

//Calling the Asynchronous function(need to use "await")

// let value = await getRandomNumber();
// console.log(`Random number is ${value}`);


//Creating the Asynchronous function with some wait time.

async function getRandomNumberWithTimeout(): Promise<number> {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const random: number = Math.random();
            console.log(random);
            if (random > 0.5) {
                resolve(random);
            } else {
                reject(new Error(`Random number ${random} is less than 0.5.`));
            }

        }, 10000)

    })

}

let value1 = await getRandomNumberWithTimeout();
console.log(`Random number is ${value1}`);