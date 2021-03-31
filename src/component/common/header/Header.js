import { Link } from "react-router-dom"
import "../Common.css"
import "./Header.css"
import Navigation from "./navigation/Navigation";

const Header = ({isLoginBefore}) => {
    return (
        <div className="header">
            <div className="header-left sort-center">
                <Link to="/" className="main-link sort-center">
                    <div className="main-logo"/>
                    <span className="main-project-name sort-center">꼬리별</span>
                </Link>
            </div>

            {
                isLoginBefore ?
                    <>
                        <div className="header-middle sort-center"/>
                        <div className="header-right sort-center">
                            <Link to="/signin">
                                <span className="sign-in">Sign in</span>
                            </Link>
                            <Link to="/signup">
                                <span className="sign-up">Sign up</span>
                            </Link>
                        </div>
                    </>
                    :
                    <>
                        <div className="header-middle sort-center">
                            <Navigation link="/target" navigationName="Target"/>
                            <Navigation link="/group" navigationName="Group"/>
                            <Navigation link="/template" navigationName="Template"/>
                            <Navigation link="/document" navigationName="API Document"/>
                        </div>
                        <div className="header-right sort-center">
                        </div>
                    </>
            }


        </div>
    );
}

export default Header;

