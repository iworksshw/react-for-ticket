import { Outlet } from 'react-router-dom';
import CptHeader from "../common/CptHeader";
import CptFooter from "../common/CptFooter";

function Layout() {

    return (
        <div className="lytLayout" style={{width:"100%"}}>
            <div className="layoutArea">
                <div className="layoutTop">
                    <CptHeader />
                </div>
                <div className="layoutContainer">
                    <div className="layoutSubCont">
                        <Outlet />
                    </div>
                </div>
                <div className="layoutFooter">
                    <CptFooter />
                </div>
            </div>
        </div>
    );
}

export default Layout;