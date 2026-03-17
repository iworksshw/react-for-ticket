import CptHeader from "../../components/common/CptHeader";
import CptFooter from "../../components/common/CptFooter";
import { Link } from "react-router-dom";

function PrView() {
    const boartTitle = "불법스포츠도박 근절부터 장애인 체육 후원까지…스포츠토토, 공익 사업의 근절부터 장애인 체육 후원까지";
    const boardDate = "2024.09.06";
    const boardContent = `<p style="font-size: 25px; text-align: center; color:#222;">스포츠토토 누적수익금 19조... 국민체육 진흥 재원 활용</p><br>

                        <p style="font-size: 20px; text-align: center; color:#222;">공공체육시설 확충, 장애인 체육... 지원등 스포츠도박 근절 위한 노력도</p> <br><br><br>
                        

                        <p style="font-size: 20px; text-align: left; color:#222;">‘2002 한·일 월드컵’의 성공적 개최와 스포츠 발전 재원 마련을 목표로 2001년 첫발을 
                            내디딘 스포츠토토의 누적 수익금이 2024년 말 현재 19조원에 이르는 것으로 나타났다.</p><br>

                        <p style="font-size: 20px; text-align: left; color:#222;">국민체육진흥공단이 발행하는 체육진흥투표권 스포츠토토의 수탁사업자 한국스포츠레저는 
                            27일 “스포츠토토 출범 이후 지난 23년 동안 조성한 누적 수익금이 약 18조9000억원에 달한다”며 ”이렇게 조성된 수익금은 생활 체육과 전문 체육 육성, 
                            장애인 체육 지원 등을 통해 국민 모두가 균등하게 체육을 누릴 수 있도록 사용되고 있다”고 밝혔다. 수익금은 구체적으로 공공체육시설 확충, 국가대표 
                            선수 육성, 스포츠 연구개발 등 다양한 분야에서 쓰인다.</p><br>

                        <p style="font-size: 20px; text-align: left; color:#222;">이런 노력에도 불구하고 스포츠토토는 불법 스포츠 도박과 혼동돼 부정적으로 여겨지기도 
                            한다. 한국스포츠레저는 이런 오해를 바로잡고 스토츠토토를 건전한 여가문화로 정착시키기 위해 노력하고 있다. 한국도박문제예방치유원과 같은 
                            유관기관과 연계한 도박 중독 예방 캠페인, 판매점주와 종사자 등을 대상으로 한 건전화 교육 등을 시행하고 있다.</p><br>

                        <p style="font-size: 20px; text-align: left; color:#222;">특히 올해 6월에는 대구가톨릭대학교 예술치료센터와 도박 중독 예방 프로그램 공동 
                            개발 협약을 체결하고 이용자 대상 상담 및 치유 활동을 펼쳤다. 또 9월에는 도박 중독 위험군을 위한 ‘힐링 캠프’를 열어 미술과 음악을 통한 치유 
                            프로그램을 운영하기도 했다.</p><br>

                        <p style="font-size: 20px; text-align: left; color:#222;">스포츠토토는 올해 한국프로축구연맹(K리그), 프로야구(KBO리그) 구단과 공동으로 
                            경기장 현장 프로모션인 ‘내 응원의 함성을 스포츠토토와 함께’를 펼쳤다. 관람객들에게 스포츠토토의 건전성과 공익성을 알리는 한편, 불법 스포츠 
                            도박의 위험성을 전달하기 위해 기획된 행사다. 올해 총 25회(K리그 공동 진행 16회, KBO 구단 공동 진행 9회)가 진행돼 약 6만5000명의 스포츠 
                            팬들이 참여했다.</p>`;

    return (
        <section style={{width:"100%"}}>
            <CptHeader />
                <section className="subContents">
                    <div className="inner">
                        <h2 style={{marginBottom:30}}>채용공고</h2>
                        <p>한국스포츠레저와 함께 할 인재를 찾습니다.</p>

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
                            <Link to="/react-for-beginners/board/pr" className="btnList">목록</Link>
                        </div>
                    </div>
                </section>
            <CptFooter />
        </section>
    );
}
export default PrView;