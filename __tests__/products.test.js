const { getFullName } = require('../src/products')

describe("this will test getFullName", () => {
    test("", () => {
        const input = { names: { first: "Tim", surname: "McAwesome"} }
        const actual = getFullName(input);
        const expected = `Tim McAwesome`;
        expect(actual).toEqual(expected)
    })
});