import difference from "../difference";

describe("Test difference", () => {
    it("Should return array with difference", () => {
        expect(difference([1, 2, 3, 4, 5, 6, 7], [4, 5, 6, 7]))
        .toStrictEqual([1, 2, 3]);

        expect(difference([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [4, 5], [9, 10, 11]))
        .toStrictEqual([1, 2, 3, 6, 7, 8])

        expect(difference([100, 200, 500, 1000], [1100, 1500]))
        .toStrictEqual([100, 200, 500, 1000]);

        expect(difference([1, 2, 3, 4], [])).toStrictEqual([1, 2, 3, 4]);
    });
    it("Should handle cases when not given array", () => {
        expect(difference({a:"b"})).toStrictEqual([]);
        expect(difference("String")).toStrictEqual([]);
        expect(difference(1000000)).toStrictEqual([]);
    });
    it("Should keep order of first given array", () => {
        expect(difference([1, 2, 3, 4, 5], [5, 3, 1]))
        .toStrictEqual([2, 4]);
    });
});