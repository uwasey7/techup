const items = [
    ["Bike", 100],
    ["TV", 200],
    ["Album", 10],
    ["Book", 5],
    ["Phone", 500],
    ["Computer", 1000]
]

let prices = [];
for (let i = 0; i < items.length; i++) {
    prices.push(items[i][1]);
}

findCheapProduct();
findExpensiveProduct();
findTotalPrice();
findTotalPriceAboveFive();

function findCheapProduct() {
    let leastPrice = Math.min(...prices);

    for (let i = 0; i < items.length; i++) {
        if (items[i][1] == leastPrice) {
            console.log("Found")
            console.log(`The cheapest product that I will bought when I don't have much money is: ${items[i][0]}`);
        }
    }
}

function findExpensiveProduct() {
    let highestPrice = Math.max(...prices);

    for (let i = 0; i < items.length; i++) {
        if (items[i][1] == highestPrice) {
            console.log("Found")
            console.log(`The most expensive product is: ${items[i][0]}`);
        }
    }
}

function findTotalPrice() {
    let maxPrice = prices.reduce(findTotal);
    console.log(`The total: ${maxPrice}$`);
}

function findTotal(total, element) {
    return total += element;
}

function findTotalPriceAboveFive() {
    var total = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] >= 10) {
            total += prices[i];
        }
    }
    console.log(`The total: ${total}$`);
}