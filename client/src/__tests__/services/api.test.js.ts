import Api from "../../services/api";

describe("Test API", () => {
    it.each([
        [{}, ""],
        [{"foo": "bar"}, "foo=bar"],
        [{"a": ["b", "c"]}, "a=b&a=c"],
        [{"a": null, "b": "b"}, "b=b"],
        [{"key": "major", "notes": ["C", "D"], "pitches": []}, "key=major&notes=C&notes=D"],
    ])("%p as %p", (params: object, expected: string) => {
        const actual = new Api("host").createSearchParams(params)
        expect(actual).toEqual(expected)
    })
})