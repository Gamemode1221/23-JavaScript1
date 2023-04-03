function gcd(a, b) {
    let max = a > b ? a : b;
    let GCD = 0;

    for (let i = 1; i <= max; i++) {
        if (a % i === 0 && b % i === 0)
            GCD = i;
    }

    return GCD;
}

console.log(`308과 20의 최대공약수 : ${gcd(308, 20)}`);
console.log(`45과 38의 최대공약수 : ${gcd(45, 38)}`);
