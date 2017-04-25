function PrimeFactors() {

}

PrimeFactors.prototype.calculate = function(n){
    var primes = [];
    while(n > 1) {
        if (n % 2 === 0) {
            primes.push(2);
            n /= 2;
        } else if (n % 3 === 0) {
            primes.push(3);
            n /= 3;
        } else {
            primes.push(n);
            break;
        }

    }

    return primes;
};