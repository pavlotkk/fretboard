class Api {
    static _cache = {
        supportedScales: null
    }

    host: string
    user: string | null

    constructor(host = "", userId: string | null = null) {
        this.host = (host || window.app_config.api_host || "").trim()
        this.user = userId
    }

    withUser = (userId: string): Api => {
        this.user = userId
        return this
    }

    getSupportedScales = (useCache = true) => {
        if (Api._cache.supportedScales === null || !useCache) {
            return this.get('/api/supported-scale-keys').then(r => {
                Api._cache.supportedScales = r.data;
                return r.data
            })
        }

        return new Promise<any>((resolve, reject) => {
            resolve(Api._cache.supportedScales)
        })
    }

    getScale = (note: string, key: string) => {
        return this.get("/api/scale", {note: note, key: key})
    }

    getScaleToLearn = (notes?: string[] | null, pitches?: string[] | null, keys?: string[] | null) => {
        return this.get("/api/learn/scale", {notes: notes, pitches: pitches, keys: keys})
    }

    request = (method: string, url: string, params: any = null, headers: any = null) => {
        const urlParams = this.createSearchParams(params)

        if (headers == null) {
            headers = {}
        }

        if(this.user){
            headers["X-User-Id"] = this.user
        }

        return window.fetch(`${this.host}${url}?${urlParams}`, {
            method: method,
            headers: {
                'content-type': "application/json",
                ...headers
            }
        })
    }

    get = (url: string, params: any = null, headers: any = null) => {
        return this.request("GET", url, params, headers).then(r => r.json())
    }

    createSearchParams(params: object): string {
        if (params == null) {
            return ""
        }

        let urlParams: any[][] = []

        for (const [key, value] of Object.entries(params)) {
            if (value == null || value === '') {
                continue
            }
            if(Array.isArray(value)){
                if(value.length === 0){
                    continue
                }
                for(const i of value){
                    urlParams.push([key, i])
                }
            } else {
                urlParams.push([key, value as any])
            }
        }

        return new URLSearchParams(urlParams).toString()
    }
}

export default Api;