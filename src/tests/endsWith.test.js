import endsWith from "../endsWith";

describe("Test endsWith", () => {
    it("Should work for singular letter to check", () => {
        expect(endsWith("abc", "c")).toBe(true);
        expect(endsWith("This is a sentence.", ".")).toBe(true);
        expect(endsWith("", "")).toBe(true);
        expect(endsWith("This sentence has unnecessary whitespace. ", " ")).toBe(true);
        expect(endsWith("€", "€")).toBe(true);
        expect(endsWith("$", "$")).toBe(true);

        expect(endsWith("", " ")).toBe(false);
        expect(endsWith("abc", "d")).toBe(false);
        expect(endsWith("123456", "12345")).toBe(false);
    });
    it("Should work for longer strings", () => {
        expect(endsWith("This should work.", "work.")).toBe(true);
        expect(endsWith("Text.", "Text.")).toBe(true);
        expect(endsWith("This shouldn't work.", "work")).toBe(false);
    });
    it("Should work when given a position", () => {
        expect(endsWith("abc", "b", 2)).toBe(true);
        expect(endsWith("abc", "a", 3)).toBe(false);
        expect(endsWith("abc", "bc", 3)).toBe(true);
        expect(endsWith("abcdef", "ef", 3)).toBe(false);
    });
    it("Should handle bad positions properly", () => {
        expect(endsWith("abc", "", -5)).toBe(true);
        expect(endsWith("String", "", 0)).toBe(true);
    });
    it("Should handle cases where position is greater than string length", () => {
        expect(endsWith("String", "g", 1000)).toBe(true);
        expect(endsWith("Word", "d", 5)).toBe(true);
    });
});