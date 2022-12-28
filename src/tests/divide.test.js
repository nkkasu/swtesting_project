import divide from "../divide";

describe("Testing divide", () => {

    it("Should divide two integers properly", () => {
        expect(divide(6, 4)).toBeCloseTo(1.5);
        expect(divide(5, 2)).toBeCloseTo(2.5);
        expect(divide(-6, 4)).toBeCloseTo(-1.5);
        expect(divide(-6, -4)).toBeCloseTo(1.5);
    });

    it("Should handle NaN correctly", () => {
        expect(divide(1, NaN)).toBe(NaN);
        expect(divide(NaN, 50)).toBe(NaN);
        expect(divide(-1, NaN)).toBe(NaN);
        expect(divide(NaN, -1)).toBe(NaN);
    });

    it("Should handle division by zero", () => {
        // Throw or return NaN?
        expect(divide(50, 0)).toBe(NaN);
        expect(divide(15, -0)).toBe(NaN);
        expect(divide(-15, -0)).toBe(NaN);
    });

    it("Should handle infinite numbers correctly", () => {
        expect(divide(Infinity, 1)).toBe(Infinity);
        expect(divide(1, Infinity)).toBe(0);
        expect(divide(-1, Infinity)).toBe(0);
    });
});