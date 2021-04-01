import React from 'react';
import { Link } from "react-router-dom";

const Navigation = ({ link, navigationName }) => {
    return (
        <>
            <Link to={link}>
                <span className="header-navigation">{navigationName}</span>
            </Link>
        </>
    );
};

export default Navigation;