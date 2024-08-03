const FetchClient = {
    async get(url) {
        return await fetch(url)
    },

    async post (url, body) {
        return await fetch(url, {
            method: "POST",
            body: JSON.stringify(body),
            header: {
                'Content-Type': 'application/json'
            }
        })
    }
}

export default FetchClient    