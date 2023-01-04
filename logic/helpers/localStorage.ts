export const storage = {
    get: (key: string) => {
        if (typeof window !== "undefined") {
            const res = localStorage.getItem(key)
            if (res) {
                return JSON.parse(res)
            }
        }
    },
    set: (key: string, value: string) => {
        if (typeof window !== "undefined") {
            localStorage.setItem(key, JSON.stringify(value))
        }
    },
    remove: (key: string) => typeof window !== "undefined" ? localStorage.removeItem(key) : "undefined",
}
