import isDate from "../isDate";

describe("Test isDate", () => {
    it("Should be a valid date object", () => {
        expect(isDate(new Date)).toBe(true);
        expect(isDate(new Date("1995-12-17T03:24:00"))).toBe(true);
        expect(isDate(new Date("1995, 11, 17"))).toBe(true);
        expect(isDate(new Date("1995, 11, 17, 3, 24, 0"))).toBe(true);
        expect(isDate(new Date(628021800000))).toBe(true);
        expect(isDate(new Date(98, 1))).toBe(true);
    });
    it("Should not be a valid date object", () => {
        const date = new Date("1995, 11, 17");
        expect(isDate("Mon April 23 2012")).toBe(false);
        expect(isDate("14.10.2022")).toBe(false);
        expect()
        expect(isDate(1)).toBe(false);
        expect(isDate(date.getDate)).toBe(false);
        expect(isDate(new Object)).toBe(false);
    });
});