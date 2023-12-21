import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Card from "../components/ui-card/Card";
import arrow_left from "../assets/arrow_left.svg";
import arrow_right from "../assets/arrow_right.svg";
import styles from "./ListPage.module.scss";

export function ListPage() {

  const [data, setData] = useState({ cardData: [], count: 0, arrow: false });

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://rolling-api.vercel.app/2-7/recipients/"
      );
      const responseResult = await response.json();
      setData((prevState) => ({
        ...prevState,
        cardData: [...responseResult.results],
        count: responseResult.count,
        arrow: responseResult.count >= 4 ? true : false,
      }));
    responseResult.next ? haveNext(responseResult.next) : {};
    })();
  }, []);

  async function haveNext(url) {
    const response = await fetch(url);
    const responseResult = await response.json();
    setData((prevState) => ({
      ...prevState,
      cardData: [...prevState.cardData, ...responseResult.results],
    }));
    responseResult.next ? haveNext(responseResult.next) : {};
  } 

  return (
    <div id={styles.wrapper}>
      <div className={styles.card_box_wrapper}>
        <p className={styles.heading}>인기 롤링 페이퍼 🔥</p>
        <div className={styles.card_box}>
          {data.arrow ? <button><img className={styles.arrow_button_left} src={arrow_left}/></button> : undefined}
          <ul className={styles.card_box_inner}>
            {data.cardData
              .sort((a, b) => b.messageCount - a.messageCount)
              .map((item) => (
                <li key={item.id} className={styles.card}>
                  <Card item={item}></Card>
                </li>
              ))}
          </ul>
          {data.arrow ? <button><img className={styles.arrow_button_right} src={arrow_right}/></button> : undefined}
        </div>
      </div>
      <div className={styles.card_box_wrapper}>
        <p className={styles.heading}>최근에 만든 롤링 페이퍼 ⭐️️</p>
        <div className={styles.card_box}>
          {data.arrow ? <button><img className={styles.arrow_button_left} src={arrow_left}/></button> : undefined}
          <ul className={styles.card_box_inner}>
            {data.cardData
              .sort(
                (a, b) =>
                  new Date(b.createdAt).getTime() -
                  new Date(a.createdAt).getTime()
              )
              .map((item) => (
                <li key={item.id} className={styles.card}>
                  <Card item={item}></Card>
                </li>
              ))}
          </ul>
          {data.arrow ? <button><img className={styles.arrow_button_right} src={arrow_right}/></button> : undefined}
        </div>
      </div>
      <div className={styles.link_box}>
        <Link to="/Post" className={styles.link_to_post}>
          <span className={styles.text_in_button}>나도 만들어보기</span>
        </Link>
      </div>
    </div>
  );
}
