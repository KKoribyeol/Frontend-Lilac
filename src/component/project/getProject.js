import axios from "axios";

export const getProject = async () => {
    try {
        const res = await axios.get("http://localhost:6180/project", {
            headers: {
                Authorization: localStorage.getItem("accessToken"),
            },
        })
        return res
    } catch (error) {
        console.log(error.message)
    }
}