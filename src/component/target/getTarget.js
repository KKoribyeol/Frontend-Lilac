import axios from "axios";

export const getTarget = async () => {
    try {
        return await axios.get("http://localhost:6180/target", {
            headers: {
                Authorization: localStorage.getItem("accessToken"),
                projectCode: "projectCode-finally",
            },
        })
    } catch (error) {
        console.log(error.message)
    }
}