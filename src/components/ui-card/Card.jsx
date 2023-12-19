import React from "react";
import styles from "./Card.module.scss";
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default function Card(props) {
    const bgColor = props.response.backgroundColor;
    const bgImg = props.response.backgroundImageURL;

    function linkToId(){
        window.location.href = `localhost:5173/post/${props.id}`
    }

    return (
        <div onClick={linkToId} className={`${styles.card} ${styles[bgColor]} ${styles[bgImg]}`}>
            <div className={styles.card_inner}>
                <div className={styles.card_data}>
                    <p className={styles.recipient}>To. {props.response.name}</p>
                    <ul className={styles.img_box}>
                        {props.response.recentMessages.map(item => <li key={item.id}><img className={styles.profile_image} src={item.profileImageURL} alt={`Profile of ${props.response.name}`}></img></li>)}
                    </ul>
                    <p className={styles.alert}><span className={styles.count_in_alert}>{props.response.messageCount}</span>명이 작성했어요!</p>
                </div>
                <div className={styles.reaction_box}>
                    <ul>
                        {/* reaction 추가 필요 */}
                    </ul>
                </div>
            </div>
        </div>
    );
}
