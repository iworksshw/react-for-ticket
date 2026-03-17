import CptHeader from "../../components/common/CptHeader";
import CptFooter from "../../components/common/CptFooter";
import {Link} from "react-router-dom";

function Pr() {
    const boardList = [
        { id: 10, title: "불법스포츠도박 근절부터 장애인 체육 후원까지…스포츠토토, 공익 사업의 근절부터 장애인 체육 후원까지", url: "/react-for-beginners/board/PrView", date: "2024.09.06", views: 933 },
        { id: 9, title: "불법스포츠도박 근절부터 장애인 체육 후원까지…스포츠토토, 공익 사업의 근절부터 장애인 체육 후원까지 불법스포츠도박 근절부터 장애인 체육 후원까지…스포츠토토", url: "/react-for-beginners/board/PrView", date: "2024.09.06", views: 933 },
        { id: 8, title: "불법스포츠도박 근절부터 장애인 체육 후원까지…스포츠토토, 공익 사업의 근절부터 장애인 체육 후원까지", url: "/react-for-beginners/board/PrView", date: "2024.09.06", views: 933 },
        { id: 7, title: "불법스포츠도박 근절부터 장애인 체육 후원까지…스포츠토토, 공익 사업의 근절부터 장애인 체육 후원까지", url: "/react-for-beginners/board/PrView", date: "2024.09.06", views: 933 },
        { id: 6, title: "불법스포츠도박 근절부터 장애인 체육 후원까지…스포츠토토, 공익 사업의 모", url: "/react-for-beginners/board/PrView", date: "2024.09.06", views: 933 },
        { id: 5, title: "불법스포츠도박 근절부터 장애인 체육 후원까지…스포츠토토, 공익 사업의 모", url: "/react-for-beginners/board/PrView", date: "2024.09.06", views: 933 },
        { id: 4, title: "불법스포츠도박 근절부터 장애인 체육 후원까지…스포츠토토, 공익 사업의 모", url: "/react-for-beginners/board/PrView", date: "2024.09.06", views: 933 },
        { id: 3, title: "불법스포츠도박 근절부터 장애인 체육 후원까지…스포츠토토, 공익 사업의 모", url: "/react-for-beginners/board/PrView", date: "2024.09.06", views: 933 },
        { id: 2, title: "불법스포츠도박 근절부터 장애인 체육 후원까지…스포츠토토, 공익 사업의 모", url: "/react-for-beginners/board/PrView", date: "2024.09.06", views: 933 },
        { id: 1, title: "불법스포츠도박 근절부터 장애인 체육 후원까지…스포츠토토, 공익 사업의 모", url: "/react-for-beginners/board/PrView", date: "2024.09.06", views: 933 },
    ]
    return (
        <section style={{width:"100%"}}>
            <CptHeader />
                <section className="subContents">
                    <div className="inner">
                        <h2 style={{marginBottom:30}}>공지사항</h2>
                        <p>한국스포츠레저의 미디어 보도내용입니다.</p>
                        <table className="boardTable" width="100%">
                            <caption>번호, 제목, 등록일 및 조회수로 이루어진 표</caption>
                            <colgroup>
                                <col style={{width:108}} />
                                <col style={{width:847}} />
                                <col style={{width:118}} />
                                <col style={{width:127}} />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th scope="col">번호</th>
                                    <th scope="col">제목</th>
                                    <th scope="col">등록일</th>
                                    <th scope="col">조회수</th>
                                </tr>
                            </thead>
                            <tbody>
                                {boardList.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td><Link to={item.url}>{item.title}</Link></td>
                                        <td>{item.date}</td>
                                        <td>{item.views}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="paging mt30">
                            <a href="#" className="pagePrev">이전</a> 
                            <a href="#" className="current">1</a>
                            <a href="#" className="">2</a>
                            <a href="#" className="">3</a>
                            <a href="#" className="">4</a>
                            <a href="#" className="">5</a>
                            <a href="#" className="pageNext">다음</a>
                        </div>
                    </div>

                </section>
            <CptFooter />
        </section>
    );
}
export default Pr;