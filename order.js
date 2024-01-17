const orderData = {
    'Below 500': 20,
    '500-1000': 29,
    '1000-1500': 30,
    '1500-2000': 44,
    'Above 2000': 76
}
let totalOrders = 0;


for (let key in orderData) {
    totalOrders += orderData[key];
}
console.log("Total number of orders placed =", totalOrders);
const numberOfProportions = Object.keys(orderData).length;
console.log("Total number of order proportions =", numberOfProportions);


// Calculate the percentage of each order proportion
let orderPercentages = [];
let id = 1;

for (let key in orderData) {
    let percentage = (orderData[key] / totalOrders) * 100;
    orderPercentages.push({
        "id": id,
        "order": key,
        "orderPercentage": percentage.toFixed(2),
        "restaurant": "Punjabi Tadka"
    });
    id++
}

console.log("percentage of each proportion",orderPercentages);