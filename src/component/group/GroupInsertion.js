import axios from "axios";
import { useState } from "react";
import * as config from "../../config";

const GroupInsertion = () => {
    const [ name, setName ] = useState("");

    const handleName = name => setName(name.currentTarget.value);

    const submit = () => {
        axios.post(config.BASE_URL + "/group", {
            name: name,
        }, {
            headers: {
                Authorization: localStorage.getItem("accessToken"),
                projectCode: localStorage.getItem("projectCode"),
            },
        }).then(() => {
            window.location.reload();
        }).catch(error => {
            switch (error.response.status) {
                case 400:
                    alert(`이미 존재하는 그룹입니다. [${name}]`);
                    break;
                default:
                    alert(error.response.data.message);
                    break;
            }
        })
    }

    return (
        <div className="content-wrapper-wrapper">
            <div className="content-wrapper">
                <div className="group-content-name-wrapper project-void">
                    <input
                        type="text"
                        onChange={handleName}
                        value={name}
                        className="group-input-tag"
                    />
                </div>
            </div>
            <div className="content-insertion-image" onClick={submit}/>
        </div>
    );
};

export default GroupInsertion;