import CptHeader from "../../components/common/CptHeader";
import CptFooter from "../../components/common/CptFooter";
import { Link } from "react-router-dom";

function CareersView() {
    const boartTitle = "[수시채용] 9월 각 부문별 신입 채용(24.09.06~09.12)";
    const boardDate = "2024.09.06";
    const boardViews = 933;
    const boardEmail = "recruit@recruitmail.com"
    const boardPeriod = "2024.09.06 ~ 2024.09.13";
    const boardFiles = ["입사지원 지원부문 성명.docx", "자기소개서 양식.docx", "개인정보 수집 및 이용 동의서.docx", "입사지원 지원부문 성명.docx"];
    const boardContent = `<img src="/resource/images/main//view_sample.jpg" alt="각 부문별 신입 채용" /> 한국스포츠레저(주)는 국민체육진흥공단의 체육진흥투표권사업을 위탁받아 운영하고 있는 회사로, 
    스포츠토토 및 프로토를 통해 조성된 수익금은 전액 국민체육진흥기금으로 편입되어 생활체육·전문체육·장애인체육 육성 뿐만 
    아니라, 국내에서 개최되는 각종 국제대회를 지원하는 등, 다양한 체육진흥 사업에 사용되고 있습니다.`;

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
                                <tr>
                                    <th>채용담당 E-mail</th>
                                    <td>{boardEmail}</td>
                                    <th>채용기간</th>
                                    <td>{boardPeriod}</td>
                                </tr>
                                <tr>
                                    <th>첨부파일</th>
                                    <td colSpan="3">
                                        {boardFiles.map((file, index) => (
                                            <a href="#" className="download" key={index}>{file}</a>
                                        ))}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        
                        <div className="comViewCont">
                            <div className="contArea" dangerouslySetInnerHTML={{ __html: boardContent }}></div>
                        </div>

                        <div className="btnarea">
                            <Link to="/react-for-beginners/board/careers" className="btnList">목록</Link>
                        </div>
                    </div>
                </section>
            <CptFooter />
        </section>
    );
}
export default CareersView;