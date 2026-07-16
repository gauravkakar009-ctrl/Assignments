//Create a function to calculate Max Profit

function maxProfit(prices: number[]){
    let minPrice = prices[0];
    let maxProfit: number = 0;

    for(let i: number=0; i<prices.length; i++){
        if(prices[i]! < minPrice!){
            minPrice = prices[i];
        }else{
            let profit: number = prices[i]! - minPrice!;
            if(profit > maxProfit){
                maxProfit = profit;
            }
        }
    }
    return maxProfit;

}

let prices1 =  [7,1,5,3,6,4]
console.log(`Max profit is: ${maxProfit(prices1)}`);

let prices2 = [7,6,4,3,1]
console.log(`Max profit is: ${maxProfit(prices2)}`);

