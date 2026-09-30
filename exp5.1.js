let listEuler3 = (a, l) => {

    let sum = 0;

    for (let i = 0; i < l.length; i++) {

        for (let j = 0; j < a.length; j++) {

            if (l[i] % a[j] === 0) {
                sum = sum + l[i];
                break;
            }
        }
    }

    return sum;
};

function calculate() {

    let a = document.getElementById("a").value
        .split(",")
        .map(Number);

    let l = document.getElementById("list").value
        .split(",")
        .map(Number);

    alert(listEuler3(a, l));
}