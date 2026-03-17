import styles from './ComBoardList.module.scss'

function ComBoardList(props) {
    const dataList = props.data;
    return(
        <div className={styles.comBoardList}>
            <table>
                <caption>게시판 테이블 표</caption>
                <colgroup>
                    <col style={{width:"9%"}} />
                    <col style={{width:"auto"}} />
                    <col style={{width:"11.7%"}} />
                    <col style={{width:"11.7%"}} />
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
                        {dataList.page.map((page,idx) => (
                            <tr key={idx}>
                                <th className={styles.bdType}><span className={styles.listType}>{page.no}</span></th>
                                <td className={styles.bdTitle}>
                                    <div className={styles.link}>
                                        <div className={styles.title}>
                                            <a href="javascript:void(0)">{page.title}</a>
                                        </div>
                                    </div>
                                </td>
                                <td className={styles.date}>{page.date}</td>
                                <td className={styles.view}>{page.view}</td>          
                            </tr>
                        ))}   
                </tbody>
            </table>
        </div>
    );
}
export default ComBoardList;