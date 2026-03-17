import { Outlet } from 'react-router-dom';
import CptHeader from "../common/CptHeader";
import CptFooter from "../common/CptFooter";
import CptSubTop from "../../components/component/CptSubTop"
import Guide from "../Guide";

function GuideLayout() {
    const SUB_TOP_TITLE = "2차 가이드";
    const SUB_TOP_MENU01 = ["승차권", "직통열차", "일반열차", "고객서비스", "고객센터"];
    const SUB_TOP_MENU02 = ["승차권 예약변경/취소", "직통열차 소개", "직통열차 시간표", "직통열차 운임안내", "직통열차 승차권구입 안내", "도심공항터미널"];
    return (
        <div className="lytLayout" style={{width:"100%"}}>
            <div className="layoutArea">
                <div className="layoutTop">
                    <CptHeader />
                </div>
                <div className="layoutContainer">
                    <div className="layoutSubCont">
                        <CptSubTop title = {SUB_TOP_TITLE} menu1List = {SUB_TOP_MENU01} menu2List = {SUB_TOP_MENU02} />
                        <Outlet />
                    </div>
                    <Guide />
                </div>
                <div className="layoutFooter">
                    <CptFooter />
                </div>
            </div>
        </div>
    );
}

export default GuideLayout;