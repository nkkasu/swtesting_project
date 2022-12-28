import ceil from "../ceil";

describe("Testing ceil", () => {
    it("Should round numbers properly (no precision)", () => {
        expect(ceil(4.006)).toBe(5);
        expect(ceil(5.1)).toBe(6);
        expect(ceil(-5.1)).toBe(-5);
        expect(ceil(-6.001)).toBe(-6);
        expect(ceil(0.01)).toBe(1);
    });

    it("Should round numbers properly (using positive precision)", () => {
        expect(ceil(4.006, 2)).toBe(4.01);
        expect(ceil(10.0001, 3)).toBe(10.001);
        expect(ceil(-5.001, 2)).toBe(-5.00);
    })
    it("Should round numbers properly (using negative precision)", () => {
        expect(ceil(4020, -2)).toBe(4100);
        expect(ceil(-5050, -2)).toBe(-5000);
    })
    it("Should round numbers properly, when precision larger than needed", () => {
        expect(ceil(4020, 5)).toBe(4020);
        expect(ceil(4020.123, 4)).toBe(4020.123);
        expect(ceil(6.9, -1)).toBe(10);
        expect(ceil(6.9, -2)).toBe(10);
    })
    it("Should handle NaN values correctly", () => {
        expect(ceil(NaN)).toBe(NaN);
        expect(ceil(NaN, 1)).toBe(NaN);
    });
    it("Should throw an error with decimal input", () => {
        expect(() => ceil(1, 1.5)).toThrow();
        expect(() => ceil(1, -1.5)).toThrow();
    })
    it("Should throw an error if given value is not a number or is mixed", () => {
        expect(() => ceil("a", 2)).toThrow();
        expect(() => ceil("1", 2)).toThrow();
        expect(() => ceil([], 2)).toThrow();
        expect(() => ceil({a : "b"})).toThrow();
    })
});