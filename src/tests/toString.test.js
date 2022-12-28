import toString from "../toString";

describe("Testing toString", () => {
    it("Should convert values to string", () => {
        expect(toString(-50)).toBe('-50');
        expect(toString('')).toBe('');
        expect(toString([1, 2, 3])).toBe('1,2,3');
        expect(toString(NaN)).toBe('NaN');
        expect(toString([null, null, null])).toBe(",,")
        expect(toString(null)).toBe('');
    });
    it("Should handle objects correctly", () => {
        expect(toString([1, 2, [9, 10]])).toBe('1,2,9,10');
        expect(toString([Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY])).toBe('-Infinity,Infinity');
        expect(toString({a: 1})).toBe('[object Object]');
    });
});