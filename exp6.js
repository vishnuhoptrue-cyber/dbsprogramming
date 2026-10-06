// Calculate basket total
let basketTotal = (basket, prices) => {

    let total = 0;

    for (let product in basket) {

        total = total + basket[product] * prices[product];

    }

    return total;
};


// Basket
let basket = {
    apple: 2,
    banana: 3,
    milk: 1
};


// Prices in USD
let prices = {
    apple: 2,
    banana: 1.5,
    milk: 3
};


// Calculate total in USD
let totalUSD = basketTotal(basket, prices);

alert("Total in USD: $" + totalUSD);


// Get USD exchange rates
fetch("https://open.er-api.com/v6/latest/USD")

    .then(resp => resp.json())

    .then(data => {

        // Get USD -> EUR rate
        let euroRate = data["rates"]["EUR"];

        // Convert USD total to EUR
        let totalEUR = totalUSD * euroRate;

        // Display EUR first
        alert("Total in EUR: €" + totalEUR.toFixed(2));


        // Convert EUR to different currencies
        let usd = totalEUR / euroRate;
        let inr = totalEUR * data["rates"]["INR"] / euroRate;
        let gbp = totalEUR * data["rates"]["GBP"] / euroRate;
        let aed = totalEUR * data["rates"]["AED"] / euroRate;
        let cad = totalEUR * data["rates"]["CAD"] / euroRate;


        // Display all currencies
        alert(
            "Basket Total\n\n" +

            "EUR: €" + totalEUR.toFixed(2) + "\n" +

            "USD: $" + usd.toFixed(2) + "\n" +

            "INR: ₹" + inr.toFixed(2) + "\n" +

            "GBP: £" + gbp.toFixed(2) + "\n" +

            "AED: " + aed.toFixed(2) + " د.إ\n" +

            "CAD: $" + cad.toFixed(2)
        );

    })

    .catch(error => {

        alert("Error getting exchange rates");

        console.log(error);

    });