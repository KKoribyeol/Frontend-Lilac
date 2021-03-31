import { Link } from "react-router-dom"
import "./Common.css"
import "./Header.css"

const Header = () => {
    return (
        <div className="header">
            <div className="header-left">
                <div className="main-logo"></div>
                <span className="main-project-name">꼬리별</span>
            </div>
            <div className="header-middle">

            </div>
            <div className="header-right">
                <span className="sign-in">Sign in</span>
                <Link to="./SignUp">
                    <span className="sign-up">Sign up</span>
                </Link>
            </div>
        </div>
    );
}

export default Header;

