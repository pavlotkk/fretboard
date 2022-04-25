import {Scale} from "../interfaces/music"

export default class ScaleService {
    scale: Scale
    desc: string

    constructor(scale: Scale) {
        this.scale = scale
        this.desc = this.composeDesc()
    }

    private composeDesc(): string {
        let desc = ""
        if (this.scale.sharps_count > 0) {
            desc = `${this.scale.sharps_count} #`
        } else if (this.scale.flats_count > 0) {
            desc = `${this.scale.flats_count} b`
        } else if (this.scale.sharps_count === 0 && this.scale.flats_count === 0) {
            desc = "0"
        }
        return desc
    }
}
