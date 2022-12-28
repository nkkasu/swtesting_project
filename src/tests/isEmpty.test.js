import isEmpty from "../isEmpty";

describe("Test isEmpty", () => {
    it("Should return true for empty object", () => {
        expect(isEmpty(null)).toBe(true);
        expect(isEmpty(true)).toBe(true);
        expect(isEmpty(false)).toBe(true);
        expect(isEmpty(1)).toBe(true);
        expect(isEmpty(1234)).toBe(true);
        expect(isEmpty(new Set())).toBe(true);
        expect(isEmpty(new Map())).toBe(true);
    });
    it("Should return false for non-empty object", () => {
        expect(isEmpty(new Set().add(5))).toBe(false);
        expect(isEmpty(["1", "2", "3"].map(Number))).toBe(false);
        expect(isEmpty("STRING")).toBe(false);
        expect(isEmpty(["a", "b", "c", "d"])).toBe(false);
        expect(isEmpty({a : 1})).toBe(false);
    });
});