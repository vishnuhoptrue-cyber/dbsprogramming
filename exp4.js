// Compute the sum of multiples in list l using values in list a

let listEuler2 = (a, l) => {

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

let euler2Lists = () => {

    let a = [2, 3];
    let l = [1, 2, 3, 4, 5, 6, 7, 9, 10, 10, 10];

    alert(listEuler2(a, l));
};

euler2Lists();