import axios from "axios";
import * as config from "../../config";

export const getTargetByGroup = async name => {
    try {
        return await axios.get(config.BASE_URL + `/group/${name}`, {
            headers: {
                Authorization: localStorage.getItem("accessToken"),
                projectCode: localStorage.getItem("projectCode"),
            },
        })
    } catch (error) {
        console.log(error.message)
    }
}