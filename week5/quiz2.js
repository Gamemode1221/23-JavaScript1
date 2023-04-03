const n1 = document.querySelector("#number1");
const n2 = document.querySelector("#number2");
const button = document.querySelector("#calc");
const result = document.querySelector("#result");

button.onclick = () => {
    result.innerText = getGcd(n1.value, n2.value);
}

function getGcd(a, b) {
    let max = a > b ? a : b;
    let GCD = 0;

    for (let i = 1; i <= max; i++) {
        if (a % i === 0 && b % i === 0)
            GCD = i;
    }

    return GCD;
}
