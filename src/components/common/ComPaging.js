import styles from './ComPaging.module.scss';

function ComPaging(props) {
    const pageNum = props.number;
    return(
        <div className={styles.comPaging}>
            <a className={styles.start} href="javascript:void(0)">첫페이지로 이동</a>
            <a className={styles.prev} href="javascript:void(0)">이전 페이지로 이동</a>
            <ul className={styles.numList}>
                <li><a href="javascript:void(0)">1</a></li>
                <li className={styles.on}><a href="javascript:void(0)">2</a></li>
                <li><a href="javascript:void(0)">3</a></li>
                <li><a href="javascript:void(0)">4</a></li>
                <li><a href="javascript:void(0)">5</a></li>
                <li><a href="javascript:void(0)">6</a></li>
                <li><a href="javascript:void(0)">7</a></li>
                <li><a href="javascript:void(0)">8</a></li>
                <li><a href="javascript:void(0)">9</a></li>
                <li><a href="javascript:void(0)">10</a></li>
            </ul>
            <a className={styles.next} href="javascript:void(0)">다음 페이지로 이동</a>
            <a className={styles.end} href="javascript:void(0)">마지막 페이지로 이동</a>
        </div>
    );
}
export default ComPaging;