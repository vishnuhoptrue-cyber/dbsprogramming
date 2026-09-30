let listEuler1 = (a, b, l) => {

    let sum = 0;

    for (let i = 0; i < l.length; i++) {
        if (l[i] % a === 0 || l[i] % b === 0) {
            sum = sum + l[i];
        }
    }

    return sum;
};

function calculate() {

    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);

    let l = document.getElementById("list").value
        .split(",")
        .map(Number);

    alert(listEuler1(a, b, l));
}