class Api {
    static _cache = {
        supportedScales: null
    }

    host: string

    constructor() {
        this.host = (window.app_config.api_host || "").trim()
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

    getScaleToLearn = (note?: string | null, key?: string | null) => {
        return this.get("/api/learn/scale", {note: note, key: key})
    }

    request = (method: string, url: string, params: any = null, headers: any = null) => {
        const urlParams = this.createSearchParams(params)

        if (headers == null) {
            headers = {}
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

    createSearchParams(params: any): string {
        if (params == null) {
            return ""
        }

        let urlParams = new URLSearchParams()

        for (const [key, value] of Object.entries(params)) {
            if (value == null || value === '') {
                continue
            }
            urlParams.append(key, value as any)
        }

        return urlParams.toString()
    }
}

export default Api;