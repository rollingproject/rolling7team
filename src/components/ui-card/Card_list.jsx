import React, { useEffect, useState } from "react";
import styles from "./Card_list.module.scss";
import { Link } from "react-router-dom";

export default function Card({ item }) {
  const [messageList, setMessageList] = useState([]);
  const [emojiList, setEmojiList] = useState([]);
  const { id, backgroundColor, backgroundImageURL, name } = item;
  const isImg = {};

  backgroundImageURL
    ? (isImg.backgroundImage = 
      `linear-gradient(180deg, rgba(0, 0, 0, 0.54) 0%, rgba(0, 0, 0, 0.54) 100%),
      url(${backgroundImageURL})`)
    : {};

  useEffect(() => {
    (async () => {
      const messageListData = await fetch(
        `https://rolling-api.vercel.app/2-7/recipients/${id}/messages/`
      );
      const messageListDataResult = await messageListData.json();
      setMessageList((prevState) => [
        ...prevState,
        ...messageListDataResult.results,
      ]);
      const emojiListData = await fetch(
        `https://rolling-api.vercel.app/2-7/recipients/${id}/reactions/`
      );
      const emojiListDataResult = await emojiListData.json();
      setEmojiList((prevState) => [
        ...prevState,
        ...emojiListDataResult.results,
      ]);
    })();
  }, []);

  function handleRefresh() {
    window.location.reload(); // gnb 버그로 인한 임시추가
  }

  return (
    <div onClick={handleRefresh}>
    <Link to={`/post/${id}`}>
      <div
        style={isImg}
        className={`${styles.card} ${
          backgroundImageURL ? styles["bg_isImg"] : styles[backgroundColor]
        }`}
      >
        <div className={styles.card_inner}>
          <div className={styles.card_data}>
            <p
              className={`${
                backgroundImageURL
                  ? styles["white_recipient"]
                  : styles["recipient"]
              }`}
            >
              To. {name}
            </p>
            <ul className={styles.img_box}>
              {messageList.map((data, index) =>
                index < 3 ? (
                  <li
                    key={data.id}
                    style={{ position: "relative", right: `${index * 10}px` }}
                  >
                    <img
                      className={styles.profile_image}
                      src={data.profileImageURL}
                    ></img>
                  </li>
                ) : index === 3 ? (
                  <li
                    key={data.id}
                    style={{ position: "relative", right: `${index * 10}px` }}
                  >
                    <div className={styles.remainder}>
                      <span className={styles.remainder_text}>
                        +{item.messageCount - 3}
                      </span>
                    </div>
                  </li>
                ) : undefined
              )}
            </ul>
            <p
              className={`${
                backgroundImageURL ? styles["white_alert"] : styles["alert"]
              }`}
            >
              <span
                className={`${
                  backgroundImageURL
                    ? styles["white_count_alert"]
                    : styles["count_alert"]
                }`}
              >
                {item.messageCount}
              </span>
              명이 작성했어요!
            </p>
          </div>
          <div className={styles.reaction_box_wrapper}>
            <div className={styles.reaction_box_top}>
              <ul className={styles.reaction_box}>
                {emojiList.map((item, index) =>
                  index < 3 ? (
                    <li key={item.id} className={styles.emoji_box}>
                      <span className={styles.emoji}>{item.emoji}</span>
                      <span className={styles.emoji_count}>{item.count}</span>
                    </li>
                  ) : undefined
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Link>
    </div>
  );
}
