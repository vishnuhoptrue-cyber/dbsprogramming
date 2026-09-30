let euler1 = () => {
    let sum = 0;
    for (let i = 1; i < 1000; i++) {
        if (i % 3 === 0 || i % 5 === 0) sum += i;
    }
    alert(sum); // 233168
};

let sumMultiples = (a, b, n) => {
    let sum = 0;
    for (let i = 1; i < n; i++) {
        if (i % a === 0 || i % b === 0) sum += i;
    }
    return sum;
};

let euler2 = () => {
    let a = parseInt(document.getElementById('a').value);
    let b = parseInt(document.getElementById('b').value);
    let n = parseInt(document.getElementById('n').value);
    alert(sumMultiples(a, b, n));
};