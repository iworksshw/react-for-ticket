import { useRef, useState, useEffect } from 'react';
import styles from './ComSubInfo.module.scss';

function ConSubInfoText (props) {
    const INFO_TEXT = props.text;

    return (
        <div className={styles.infoText} dangerouslySetInnerHTML = {{ __html: INFO_TEXT }}></div>
    );
}

function ConSubInfoList (props) {
    const INFO_LIST = props.list;
    
    return (
        <ul className={styles.descList}>
            {INFO_LIST.map((text, idx) => (
                <li className={styles.descItem} key={idx}>{text}</li>
            ))}
        </ul>
    );
}

function ComSubInfo(props) {
    const INFO_TEXT = props.text;
    const INFO_LIST = props.list;

    return (
        <div className={styles.comSubInfo}>
            {INFO_TEXT ? <ConSubInfoText text={INFO_TEXT} /> : <ConSubInfoList list={INFO_LIST} />}
        </div>
    );
}

export default ComSubInfo;