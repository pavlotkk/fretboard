class Api{
    host: string

    constructor() {
         this.host = (window.app_config.api_host || "").trim()
    }

    getSupportedScales = () => {
        return this.get('/api/supported-scale-keys').then(r => r.data)
    }

    getScale = (note: string, key: string) => {
        return this.get("/api/scale", {note: note, key: key})
    }

    request = (method: string, url: string, params: any = null, headers: any = null) => {
        if(params == null){
            params = {}
        }
        params = new URLSearchParams(params)

        if(headers == null){
            headers = {}
        }

        return window.fetch(`${this.host}${url}?${params}`, {
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
}

export default Api;