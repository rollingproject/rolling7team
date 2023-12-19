import React, {useEffect} from "react";
import styles from "./Card.module.scss";
import { Link } from "react-router-dom";

export default function Card({ item }) {
  const { id, backgroundColor, backgroundImageURL, name } = item;
  const target = `/post/${id}`;
  const cardStyle = {};
  const fontColor = {};
  const emoji = [];

  if (backgroundImageURL) {
    cardStyle.backgroundImage = `linear-gradient(180deg, rgba(0, 0, 0, 0.54) 0%, rgba(0, 0, 0, 0.54) 100%), url(${backgroundImageURL})`;
    cardStyle.backgroundSize = 'cover';
    fontColor.color = 'var(--white, #FFF)';
  }

  {/*useEffect(() => {
    (async function(){
        const response = await fetch(`https://rolling-api.vercel.app/2-7/recipients/${item.id}/reactions/`);
        const responseTwo = await response.json(); //responseTwo.result = 이모지를 가지고있는 객체를 요소로 가지는 배열
    })() 
  }, [])*/}

  return (
    <Link to={target}>
      <div style={cardStyle} className={`${styles.card} ${styles[backgroundColor]}`}>
        <div className={styles.card_inner}>
          <div className={styles.card_data}>
            <p style={fontColor} className={styles.recipient}>To. {name}</p>
            <ul className={styles.img_box}>
              {item.recentMessages.map((sender) => (
                <li key={sender.id}>
                  <img
                    className={`${styles.profile_image} ${styles.profile_image_1}`}
                    src={sender.profileImageURL}
                    alt={`Profile of ${sender.name}`}
                  ></img>
                </li>
              ))}
            </ul>
            <p style={fontColor} className={styles.alert}>
              <span style={fontColor} className={styles.count_in_alert}>
                {item.messageCount}
              </span>
              명이 작성했어요!
            </p>
          </div>
          <div className={styles.reaction_box}>
            <ul>{/* reaction 추가 필요 */}</ul>
          </div>
        </div>
      </div>
    </Link>
  );
}
