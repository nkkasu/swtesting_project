import add from "../add.js";

describe("Testing add", () => {
    it("Should sum two integers properly together", () => {
        expect(add(0, 0)).toBe(0);
        expect(add(10, 10)).toBe(20);
        expect(add(30, -5)).toBe(25);

        expect(add(-10, -10)).toBe(-20);
        expect(add(-15, 15)).toBe(0);
        expect(add(-15, 0)).toBe(-15);
        expect(add(15, 0)).toBe(15);

        expect(add(-500, 15000)).toBe(14500);
    });
    it("Should sum two decimals properly together", () => {
        expect(add(0.05, 0.1)).toBeCloseTo(0.15, 6);
        expect(add(0.1, 0.1)).toBeCloseTo(0.2, 6);
        expect(add(-0.1, 0.1)).toBeCloseTo(0.0, 6);
        expect(add(-1000, -0.1)).toBeCloseTo(-1000.1, 6);
    });
    it("Should sum two fractional numbers properly", () => {
        expect(add(10/1, 5/1)).toBe(15);
        expect(add(-10/1, -5/1)).toBe(-15);

        expect(add(-2/3, -1/3)).toBeCloseTo(-1, 6);
        expect(add(1/5, 2/5)).toBeCloseTo(3/5);
    });
    it("Should handle error cases", () => {
        expect(() => {add("1", "3"); }).toThrow();
        expect(() => {add(1, "text"); }).toThrow();
        expect(() => {add([], 1);}).toThrow();
    });
    it("Should handle NaN correctly", () => {
        expect(add(NaN, 10)).toBe(NaN);
        expect(add(NaN, NaN)).toBe(NaN);
    });
});