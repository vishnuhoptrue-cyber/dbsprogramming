let parseList = id =>
    document.getElementById(id).value.trim().split(/\s+/).filter(s => s !== "").map(Number);

let sum = arr => arr.reduce((s, x) => s + x, 0);

let listEuler1 = (a, b, l) => sum(l.filter(x => x % a === 0 || x % b === 0));
let listEuler2 = (a, l) => sum(l.filter(x => a.some(m => x % m === 0)));
let listEuler3 = listEuler2; // same logic: a is a list of divisors

let eulerlist = () => {
    let a = parseInt(document.getElementById('a3').value);
    let b = parseInt(document.getElementById('b3').value);
    let l = parseList('l');
    alert(listEuler1(a, b, l));   // 54 with the defaults
};

let euler2Lists = () => {
    let a = parseList('a4');
    let l = parseList('l');
    alert(listEuler2(a, l));      // 54 with the defaults
};

let euler2Lists1 = () => {
    let a = parseList('a5');
    let l = parseList('l');
    alert(listEuler3(a, l));      // 59 with the defaults
};