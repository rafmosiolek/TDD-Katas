function RomanNumerals() {}

RomanNumerals.prototype.convert = function(n) {
    var roman = "";
    var digits = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };

    // var digits = [
    // ["M", 1000],
    // ["CM", 900],
    // ["D", 500],
    // ["CD", 400],
    // ["C", 100],
    // ["L", 50],
    // ["XL", 40],
    // ["X", 10],
    // ["IX", 9],
    // ["V", 5],
    // ["IV", 4],
    // ["I", 1]
    // ];


    for (i in digits) {
        while (n >= digits[i]) {
            roman += i;
            n -= digits;
        }

        return roman;
    }
    // while (n > 0) {

    // }
    // while (n >= 10) {
    //     roman += "X";
    //     n -=10;
    // }

    // while (n >= 9) {
    //     roman += "IX";
    //     n -= 9;
    // }

    // while (n >= 5) {
    //     roman += "V";
    //     n -= 5;
    // }

    // while (n >= 4) {
    //     roman += "IV";
    //     n -= 4;
    // }
    
    // while (n >= 1) {
    //     roman += "I";
    //     n -= 1;
    // }
    // return roman;
};