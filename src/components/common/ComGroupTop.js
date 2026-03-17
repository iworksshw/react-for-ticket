import styles from './ComGroupTop.module.scss';

function ComGroupTop() {
    return(
        <div className={styles.comGroupTop}>
            <div className={styles.alignL}>
                <div className={styles.unit}><span className={styles.text}>전체 <span className={styles.total}>999</span> 건</span></div>
            </div>
            <div className={styles.alignR}>
                <ul className={styles.opList}>
                    <li className={styles.item}>
                        <div className="frmGroup">
                            <div className="frmBox">
                                <select className="iptSlt" title="검색 분류">
                                    <option value="">전체</option>
                                    <option value="">제목</option>
                                    <option value="">내용</option>
                                    <option value="">제목 + 내용</option>
                                </select>
                            </div>
                        </div>
                    </li>
                    <li className={styles.item}>
                        <div className="frmGroup">
                            <div className="frmSearch">
                                <input type="text" className="iptText" placeholder="검색어를 입력해주세요." title="검색어 입력" />
                                <button className="btnSearch">검색</button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default ComGroupTop;