import axios from "axios";

export const getAccountName = async Authorization => {
    try {
        return await axios.get("http://localhost:6180/account/name", {
            headers: {
                Authorization: Authorization,
            },
        })
    } catch (error) {
        console.log(error.message)
    }
}