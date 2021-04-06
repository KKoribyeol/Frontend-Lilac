import axios from "axios";
import * as config from "../../config";

export const getTemplate = async () => {
    try {
        return await axios.get(config.BASE_URL + "/template", {
            headers: {
                Authorization: localStorage.getItem("accessToken"),
                projectCode: localStorage.getItem("projectCode"),
            },
        })
    } catch (error) {
        console.log(error.message)
    }
}