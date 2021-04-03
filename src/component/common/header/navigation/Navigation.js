import React from 'react';
import { Link, useHistory } from "react-router-dom";

const Navigation = ({ link, navigationName, isProject = false }) => {
    const history = useHistory()

    const checkProjectCode = () => {
        if (!isProject && localStorage.getItem("projectCode") == null) {
            alert("프로젝트를 선택해주세요.");
            window.location.reload()
        } else {
            history.push(link);
        }
    }

    return (
        <>
            <span className="header-navigation" onClick={checkProjectCode}>{navigationName}</span>
        </>
    );
};

export default Navigation;