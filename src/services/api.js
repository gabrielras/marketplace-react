import axios from "axios";

const url = axios.create({ baseURL: "http://localhost:3001"})

export default {
    loadProfiles: (category = null) => {
        let filter = category ? `?category=${category.title}` : ""
        return url.get(`/profiles${filter}`)
    },
    searchProfiles: (search) => url.get(`/profiles/search?q=${search}`),
    getProfiles: (id) => url.get(`/profiles/${id}`),
    loadCategories: () => url.get("/categories")
}