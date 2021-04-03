import axios from "axios";

export const getProject = async () => {
    try {
        return await axios.get("http://localhost:6180/project", {
            headers: {
                Authorization: localStorage.getItem("accessToken"),
            },
        })
    } catch (error) {
        console.log(error.message)
    }
}