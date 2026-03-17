import CptHeader from "../../components/common/CptHeader";
import CptFooter from "../../components/common/CptFooter";
import { Link } from "react-router-dom";

function BiddingView() {
    const boartTitle = "[입찰결과] 2025시즌 체육진흥투표권(스포츠토토) 한국프로야구(KBO)";
    const boardDate = "2024.09.06";
    const boardViews = 933;
    const boardContent = `안녕하십니까.<br>
                        컨텐츠 내용 들어가는 영역입니다.<br><br>
                        감사합니다`;

    return (
        <section style={{width:"100%"}}>
            <CptHeader />
                <section className="subContents">
                    <div className="inner">
                        <h2 style={{marginBottom:30}}>입찰공고</h2>
                        <p>한국스포츠레저의 입찰 관련 공지사항입니다</p>

                        <table className="comBoardTable view" width="100%">
                            <caption>번호, 제목, 등록일 및 조회수로 이루어진 표</caption>
                            <colgroup>
                                <col style={{width:"16%"}} />
                                <col style={{width:"auto"}} />
                                <col style={{width:"16%"}} />
                                <col style={{width:"auto"}} />
                            </colgroup>
                            <tbody>
                                <tr>
                                    <th>제목</th>
                                    <td colSpan="3">{boartTitle}</td>
                                </tr>
                                <tr>
                                    <th>등록일</th>
                                    <td colSpan="3">{boardDate}</td>
                                </tr>
                            </tbody>
                        </table>
                        
                        <div className="comViewCont">
                            <div className="contArea" dangerouslySetInnerHTML={{ __html: boardContent }}></div>
                        </div>

                        <div className="btnarea">
                            <Link to="/react-for-beginners/board/bidding" className="btnList">목록</Link>
                        </div>
                    </div>
                </section>
            <CptFooter />
        </section>
    );
}
export default BiddingView;