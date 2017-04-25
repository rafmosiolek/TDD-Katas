function RomanNumerals() {}

RomanNumerals.prototype.convert = function(n) {
    var roman = "";

    var arabic = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var romanSymbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

    for (var i = 0; i < arabic.length; i++ ) {
        while (n >= arabic[i]) {
            roman += romanSymbols[i];
            n -= arabic[i];
        }
    }
    
    return roman;
};





