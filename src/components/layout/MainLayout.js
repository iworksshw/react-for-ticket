import { Outlet } from 'react-router-dom';
import CptHeader from "../common/CptHeader";

function MainLayout() {

    return (
        <div className="lytLayout main">
            <div className="layoutArea">
                <div className="layoutTop">
                    <CptHeader />
                </div>
                <Outlet />
            </div>
        </div>
    );
}

export default MainLayout;