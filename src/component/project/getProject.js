import axios from "axios";
import * as config from "../../config";

export const getProject = async () => {
    try {
        return await axios.get(config.BASE_URL + "/project", {
            headers: {
                Authorization: localStorage.getItem("accessToken"),
            },
        })
    } catch (error) {
        console.log(error.message)
    }
}