import { Link } from "react-router-dom";

function CptFooter() {
    return (
        <div className="cptFooter">
            <div className="footArea">
                <div className="copyArea">
                    <div className="quickGroup">
                        <ul>
                            <li className="hglt"><a href="javascript:void(0)">공항철도</a></li>
                            <li><a href="javascript:void(0)">여객운송약관</a></li>
                            <li><a href="javascript:void(0)">누리집 이용약관</a></li>
                            <li><a href="javascript:void(0)">개인정보처리방침</a></li>
                        </ul>
                    </div>
                    <div className="copyGroup">
                        <div className="infoArea">
                            <ul>
                                <li className="add">(22694) 인천광역시 서구 검바위로 46 (검암동) 공항철도(주)</li>
                                <li className="tel">전화 <span>1599-7788</span></li>
                                <li className="fax">팩스 <span>032-745-8899</span></li>
                                <li className="name">대표자 : 박대수</li>
                                <li className="lcn">사업자등록번호 : 101-81-68490</li>
                            </ul>
                        </div>
                        <div className="copyBox">
                            <p>Copyright (C) 2025 by AIRPORT RAILROAD Co., Ltd. All rights reserved.</p>
                        </div>
                    </div>
                </div>
                <div className="markArea">
                    <ul>
                        <li>e-privacy</li>
                        <li>web acc</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default CptFooter;