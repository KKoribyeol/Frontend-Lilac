import Main from "./Main";
import Header from "../common/header/Header";

const MainContainer = () => {
    return (
        <>
            <Header isLoginBefore={true}/>
            <Main />
        </>
    );
}

export default MainContainer;