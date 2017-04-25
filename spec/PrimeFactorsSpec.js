describe("PrimeFactors", function() {
    it("calculates the prime factor of an integer", function() {
        var primeFactors = new PrimeFactors();
        expect(primeFactors.calculate(1)).toEqual([]);
        expect(primeFactors.calculate(2)).toEqual([2]);
        expect(primeFactors.calculate(3)).toEqual([3]);
        expect(primeFactors.calculate(4)).toEqual([2, 2]);
        expect(primeFactors.calculate(5)).toEqual([5]);
        expect(primeFactors.calculate(6)).toEqual([2, 3]);
        expect(primeFactors.calculate(7)).toEqual([7]);
        expect(primeFactors.calculate(8)).toEqual([2, 2, 2]);
        expect(primeFactors.calculate(9)).toEqual([3, 3]);
        expect(primeFactors.calculate(10)).toEqual([2, 5]);
    });
});