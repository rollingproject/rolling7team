import React from "react";
import styles from "./Card.module.scss";
import { Link } from "react-router-dom";

export default function Card({item}) {
  const {id, backgroundColor, backgroundImageURL, name} = item;
  const target = `/post/${id}`;
  const cardStyle = {};
  const fontColor = {}
  backgroundImageURL ? cardStyle.backgroundImage = `url(${backgroundImageURL})` : {};
  backgroundImageURL ? cardStyle.backgroundSize = 'cover' : {};
  backgroundImageURL ? cardStyle.filter = 'brightness(70%)' : {};
  backgroundImageURL ? fontColor.color = 'var(--white, #FFF)' : {};

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
