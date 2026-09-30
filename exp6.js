//total 
let basketTotal = (basket, prices) => {

    let total = 0;

    for (let product in basket) {

        total = total + basket[product] * prices[product];

    }

    return total;
};



let basket = {
    apple: 2,
    banana: 3,
    milk: 1
};

let prices = {
    apple: 2,
    banana: 1.5,
    milk: 3
};



alert(basketTotal(basket, prices));