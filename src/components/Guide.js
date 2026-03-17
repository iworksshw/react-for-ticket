import { Link } from 'react-router-dom';
import styles from './Guide.module.scss'

function Guide() {

    return (
        <div className={styles.tplMenu}>
            <ul className={styles.menuList}>
                <li className={styles.item}>
                    <Link to="/guide/TextList">타이틀, 텍스트, 리스트</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/guide/Divide">분할콘텐츠</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/guide/Img">이미지</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/guide/SubInfo">각종정보박스</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/guide/Table">테이블</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/guide/BoardList">게시판리스트</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/guide/SubBasic">서브레이아웃</Link>
                </li>
            </ul>
        </div>
    );
}
export default Guide;