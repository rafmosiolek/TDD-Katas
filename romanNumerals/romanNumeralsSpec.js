describe("RomanNumerals", function() {
    it("converts arabic numbers to roman numerals", function() {
        var romanNumerals = new RomanNumerals();

        expect(romanNumerals.convert(1)).toEqual("I");
        expect(romanNumerals.convert(2)).toEqual("II");
        expect(romanNumerals.convert(3)).toEqual("III");
        expect(romanNumerals.convert(4)).toEqual("IV");
        expect(romanNumerals.convert(5)).toEqual("V");
        expect(romanNumerals.convert(6)).toEqual("VI");
        expect(romanNumerals.convert(9)).toEqual("IX");
        expect(romanNumerals.convert(10)).toEqual("X");
        expect(romanNumerals.convert(20)).toEqual("XX");
        expect(romanNumerals.convert(20)).toEqual("XX");
        expect(romanNumerals.convert(50)).toEqual("L");
        expect(romanNumerals.convert(1949)).toEqual("MCMXLIX");
        expect(romanNumerals.convert(3999)).toEqual("MMMCMXCIX");
    });
});