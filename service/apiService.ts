import endpoints from "./endpoints"

class ApiService {
    getIp = async () => {
        try {
            const res = await fetch(endpoints.getIp)
            return await res.json()
        } catch(err) {
            console.log(err)
        }
    }
}

export default ApiService;