import styles from './ComSubBtm.module.scss';

function ComSubBtm(props) {
    const DEPARTMENT = props.department;
    const PHONE_NUMBER = props.number;
    return (
        <div className={styles.comSubBtm}>
            <div className={styles.subBtmArea}>
                <dl className={styles.manager}>
                    <dt>담당부서</dt>
                    <dd>
                        <ul>
                            <li>{DEPARTMENT}</li>
                        </ul>
                    </dd>
                </dl>
                <ul className={styles.btmList}>
                    <li className={styles.phone}>{PHONE_NUMBER}</li>
                </ul>
            </div>
        </div>
    );
}

export default ComSubBtm;