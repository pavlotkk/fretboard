export default class CircularArray<T> {
    readonly size: number
    private readonly source: T[]
    private readonly startIn: number

    constructor(source: any[], startOf: T | null = null) {
        this.source = source
        this.size = source.length

        if (startOf == null) {
            this.startIn = 0
        } else {
            const index = this.source.findIndex((v) => v === startOf)
            this.startIn = index === -1 ? 0 : index
        }
    }

    /**
     * Get value by index
     * @param index
     */
    value(index: number): T {
        index = index % this.size

        if (index < 0) {
            index = index + this.size
        }

        let relIndex = (this.startIn + index) % this.size

        return this.source[relIndex]
    }

    /**
     * Get index by value. -1 if not found
     * @param value index value
     */
    index(value: T): number {
        let i = 0
        while (i !== this.size) {
            let relIndex = this.startIn + i
            if (relIndex >= this.size) {
                relIndex = relIndex - this.size
            }

            if (this.source[relIndex] === value) {
                return i
            }
            i++
        }

        return -1
    }

    toString() {
        return this.source.join(" - ")
    }
}
