import CircularArray from "../../services/arrays"

describe("Test circular array", () => {
    it.each([
        [["1", "2", "3"], 3],
        [[], 0],
    ])("new CircularArray(%p).size == %p", (source: string[], expectedSize: number) => {
        const arr = new CircularArray<string>(source)
        expect(arr.size).toEqual(expectedSize)
    })

    it.each([
        [["1", "2", "3"], null, "1", 0],
        [["1", "2", "3"], null, "2", 1],
        [["1", "2", "3"], null, "3", 2],
        [["1", "2", "3"], "1", "1", 0],
        [["1", "2", "3"], "1", "2", 1],
        [["1", "2", "3"], "1", "3", 2],
        [["1", "2", "3"], "2", "1", 2],
        [["1", "2", "3"], "2", "2", 0],
        [["1", "2", "3"], "2", "3", 1],
        [["1", "2", "3"], "3", "1", 1],
        [["1", "2", "3"], "3", "2", 2],
        [["1", "2", "3"], "3", "3", 0],
    ])(
        "new CircularArray(%p, %p).index(%p) == %p",
        (source: string[], start: string | null, value: string, expectedIndex: number) => {
            const arr = new CircularArray<string>(source, start)
            expect(arr.index(value)).toEqual(expectedIndex)
        }
    )

    it.each([
        [["1", "2", "3"], "1", 0, "1"],
        [["1", "2", "3"], "1", 1, "2"],
        [["1", "2", "3"], "1", 2, "3"],
        [["1", "2", "3"], "1", 5, "3"],
        [["1", "2", "3"], "1", -1, "3"],
        [["1", "2", "3"], "1", -5, "2"],
        [["1", "2", "3"], "2", 2, "1"],
        [["1", "2", "3"], "2", 0, "2"],
        [["1", "2", "3"], "2", 1, "3"],
        [["1", "2", "3"], "2", 5, "1"],
        [["1", "2", "3"], "2", -1, "1"],
        [["1", "2", "3"], "2", -5, "3"],
        [["1", "2", "3"], "3", 1, "1"],
        [["1", "2", "3"], "3", 2, "2"],
        [["1", "2", "3"], "3", 0, "3"],
        [["1", "2", "3"], "3", 5, "2"],
        [["1", "2", "3"], "3", -1, "2"],
        [["1", "2", "3"], "3", -5, "1"],
    ])(
        "new CircularArray(%p, %p).value(%p) == %p",
        (source: string[], start: string | null, index: number, expectedValue: string) => {
            const arr = new CircularArray<string>(source, start)
            expect(arr.value(index)).toEqual(expectedValue)
        }
    )
})
