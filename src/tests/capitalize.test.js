import capitalize from "../capitalize";

describe("Test capitalize", () => {
    it("Should handle fully capitalized words properly", () => {
        expect(capitalize("FRED")).toBe("Fred");
        expect(capitalize("sHOULD CHANGE THIS")).toBe("Should change this");
        expect(capitalize("Should not do anything")).toBe("Should not do anything");
    });
    it("Should handle different cases properly", () => {
        expect(capitalize("")).toBe("");
        expect(capitalize("1")).toBe("1");
        expect(capitalize("😊")).toBe("😊");
        expect(capitalize(NaN)).toBe("Nan");
        expect(capitalize(Infinity)).toBe("Infinity");
        expect(capitalize(["a", "b"])).toBe("A,b");
        expect(capitalize({a : "a", b : "b"})).toBe("[object object]");
    });

});