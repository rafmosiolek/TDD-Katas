function PrimeFactors() {

}

PrimeFactors.prototype.calculate = function(n){
    var primes = [];
    var divisor = 2;

    while (divisor <= n) {
        while (n % divisor === 0) {
            primes.push(divisor);
            n /= divisor;
        }
        divisor++;
    }
    return primes;
};