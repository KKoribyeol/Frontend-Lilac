import axios from "axios";
import * as config from "../../config";

export const getGroup = async () => {
    try {
        return await axios.get(config.BASE_URL + "/group", {
            headers: {
                Authorization: localStorage.getItem("accessToken"),
                projectCode: localStorage.getItem("projectCode"),
            },
        })
    } catch (error) {
        console.log(error.message)
    }
}