import axios from "axios";

export const login = async(user) => {
    try {
        const response = axios.post("http://localhost:3000/dashboard/login", user, { withCredentials: true })
        return response
    } catch (error) {
        return error
    }
}