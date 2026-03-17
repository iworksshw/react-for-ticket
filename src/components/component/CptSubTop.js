import { useRef, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import PubDropdown from "../../components/public/PubDropdown"
import styles from './CptSubTop.module.scss';

function CptSubTop(props) {
    return (
        <div className={styles.cptSubTop}>
            <div className={styles.subTopArea}>
                <div className={styles.breadCrumb}>
                    <div className={styles.bcArea}>
                        <ul className={styles.bcList}>
                            <li className={styles.bcItem}><Link to="/ticket">홈</Link></li>
                            <li className={styles.bcItem}>
                                <PubDropdown list={props.menu1List} defaultVal={props.menu1List[0]} locn={true} />
                            </li>
                            
                            <li className={styles.bcItem}>
                                <PubDropdown list={props.menu2List} defaultVal={props.menu2List[0]} locn={true} />
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={styles.subTitle}>
                    <div className={styles.subTitleArea}>
                        <h1>{props.title}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CptSubTop;