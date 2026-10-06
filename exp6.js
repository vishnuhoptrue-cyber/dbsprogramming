// Calculate the total basket price
let basketTotal = (basket, prices) => {

    let total = 0;

    for (let product in basket) {

        total = total + basket[product] * prices[product];

    }

    return total;
};


// Basket object
let basket = {
    apple: 2,
    banana: 3,
    milk: 1
};


// Prices are in USD
let prices = {
    apple: 2,
    banana: 1.5,
    milk: 3
};


// Calculate basket total
let total = basketTotal(basket, prices);

alert("Total in USD: $" + total);


// Convert USD to another currency
let convertCurrency = (currency) => {

    fetch("https://open.er-api.com/v6/latest/USD")

        .then(resp => resp.json())

        .then(data => data["rates"][currency])

        .then(rate => {

            let convertedTotal = total * rate;

            alert(
                "Total in " +
                currency +
                ": " +
                convertedTotal.toFixed(2)
            );

        })

        .catch(error => {

            alert("Error getting exchange rate");

            console.log(error);

        });
};


// Convert to Euro
convertCurrency("EUR");