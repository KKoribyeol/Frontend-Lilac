import axios from "axios";
import * as config from "../../config";

export const getAccountName = async Authorization => {
    try {
        return await axios.get(config.BASE_URL + "/account/name", {
            headers: {
                Authorization: Authorization,
            },
        })
    } catch (error) {
        console.log(error.message)
    }
}