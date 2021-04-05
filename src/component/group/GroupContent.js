import React, { useState } from 'react';
import "../common/Common.css";
import "./Group.css"
import "../target/Target.css"
import { getTargetByGroup } from "../target/getTargetByGroup";
import axios from "axios";
import * as config from "../../config";

const GroupContent = ({ name }) => {
    const [ detailMode, setDetailMode ] = useState(false);
    const [ affiliatedTarget, setAffiliatedTarget ] = useState({
        targets: [],
    })

    const [ modificationName, setModificationName ] = useState("");
    const [ modificationMode, setModificationMode ] = useState(false);

    const switchModificationMode = () => {
        setModificationMode(!modificationMode);
    }

    const switchDetailMode = () => {
        if (modificationMode) return;

        if (!detailMode) {
            getAffiliatedTarget()
        } else {
            setAffiliatedTarget({targets: []})
        }
        setDetailMode(!detailMode);
    };

    const getAffiliatedTarget = () => {
        getTargetByGroup(name).then(result => {
            setAffiliatedTarget(prev =>
                ({ ...prev, targets: prev.targets.concat(result.data.targets)})
            )
        })
    }

    const handleName = name => setModificationName(name.currentTarget.value);

    const modifyGroup = () => {
        axios.patch(config.BASE_URL + `/group/${name}`, {
            name: modificationName,
        }, {
            headers: {
                Authorization: localStorage.getItem("accessToken"),
                projectCode: localStorage.getItem("projectCode"),
            },
        }).then(() => {
            window.location.reload()
        }).catch(error => {
            switch (error.response.status) {
                case 400:
                    switch (error.response.data.code) {
                        case "INVALID_REQUEST":
                            alert('잘못된 요청입니다.' + error.response.data.message);
                            break;
                        case "INVALID_JSON":
                            alert(error.response.data.message);
                            break;
                        default:
                            alert(error.response.data.message);
                            break;
                    } break;
                case 404:
                    switch (error.response.data.code) {
                        case "GROUP_NOT_FOUND":
                            alert(`잘못된 그룹입니다. [${name}]`);
                            break;
                        default:
                            alert(error.response.data.message);
                            break;
                    } break;
                default:
                    alert(error.response.data.message);
                    break;
            }
        })
    }

    const deleteGroup = () => {
        axios.delete(config.BASE_URL + `/group/${name}`, {
            headers: {
                Authorization: localStorage.getItem("accessToken"),
                projectCode: localStorage.getItem("projectCode"),
            },
        }).then(() => {
            window.location.reload()
        }).catch(error => {
            alert(error.response.data.message);
        })
    }

    return (
        <>
            <div className="content-wrapper-wrapper">
                <div className="content-wrapper hover-point" onClick={switchDetailMode}>
                    {
                        modificationMode ?
                            <>
                                <div className="group-content-name-wrapper">
                                    <input
                                        type="text"
                                        onChange={handleName}
                                        value={modificationName}
                                        className="group-input-tag"
                                    />
                                </div>
                            </>
                            :
                            <div className="group-content-name-wrapper">
                                <span className="group-content">{name}</span>
                            </div>
                    }
                </div>
                {
                    modificationMode ?
                        <>
                            <div className="content-modification-image" onClick={modifyGroup}/>
                            <div className="content-cancel-image" onClick={switchModificationMode}/>
                        </>
                        :
                        <>
                            <div className="content-modification-image" onClick={switchModificationMode}/>
                            <div className="content-deletion-image" onClick={deleteGroup}/>
                        </>
                }
            </div>
            {
                setDetailMode ?
                    affiliatedTarget.targets.map(target => {
                        return (
                            <div className="content-wrapper-wrapper">
                                <div className="group-detail-wrapper">
                                    <div className="target-content-token-wrapper target-void">
                                        <span className="target-content">{target.token}</span>
                                    </div>
                                    <div className="target-content-nickname-wrapper">
                                        <span className="target-content">{target.nickname}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    :
                    <>
                    </>
            }
        </>
    );
};

export default GroupContent;