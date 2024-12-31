function monthlySavings(payments, livingCost) {
    if(!Array.isArray(payments) || typeof livingCost !== "number") {
        return "Invalid input";
    }
    let total = 0;
    for(let payment of payments) {
        if(payment >= 3000) {
            payment = payment - (payment * 0.2);
        }
        total += payment;
    }
    let savings = total - livingCost;
    if(savings > 0) {
        return savings;
    } else if(savings === 0) {
        return 0;
    } else {
        return "earn more";
    }
}

console.log(monthlySavings([1000, 2000, 3000], 5400));
console.log(monthlySavings([1000, 2000, 2500], 5000)); 
console.log(monthlySavings([900, 2700, 3400], 10000)); 
console.log(monthlySavings(100, [900, 2700, 3400]));   
