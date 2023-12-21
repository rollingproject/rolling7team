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

  const overBox = useRef();
  const underBox = useRef();
  const overLeftArrow = useRef();
  const overRightArrow = useRef();
  const underLeftArrow = useRef();
  const underRightArrow = useRef();

  function overLeftScroll() {
    if (overBox.current) {
      const scrollDistance = -295;
      overBox.current.scrollTo({
        left: overBox.current.scrollLeft + scrollDistance,
        behavior: "smooth",
      });
    }
  }

  function overRightScroll() {
    if (overBox.current) {
      const scrollDistance = 295;
      overBox.current.scrollTo({
        left: overBox.current.scrollLeft + scrollDistance,
        behavior: "smooth",
      });
    }
  }

  function underLeftScroll() {
    if (underBox.current) {
      const scrollDistance = -295;
      underBox.current.scrollTo({
        left: underBox.current.scrollLeft + scrollDistance,
        behavior: "smooth",
      });
    }
  }

  function underRightScroll() {
    if (underBox.current) {
      const scrollDistance = 295;
      underBox.current.scrollTo({
        left: underBox.current.scrollLeft + scrollDistance,
        behavior: "smooth",
      });
    }
  }

  return (
    <div id={styles.wrapper}>
      <div className={styles.card_box_wrapper}>
        <p className={styles.heading}>인기 롤링 페이퍼 🔥</p>
        <div className={styles.card_box}>
          {data.arrow ? (
            <div
              className={styles.left_arrow_box}
              ref={overLeftArrow}
              onClick={overLeftScroll}
            >
              <img className={styles.left_arrow_button} src={arrow_left} />
            </div>
          ) : undefined}
          <ul className={styles.card_box_inner} ref={overBox}>
            {data.cardData
              .sort((a, b) => b.messageCount - a.messageCount)
              .map((item) => (
                <li key={item.id} className={styles.card}>
                  <Card item={item}></Card>
                </li>
              ))}
          </ul>
          {data.arrow ? (
            <div
              className={styles.right_arrow_box}
              ref={overRightArrow}
              onClick={overRightScroll}
            >
              <img className={styles.right_arrow_button} src={arrow_right} />
            </div>
          ) : undefined}
        </div>
      </div>
      <div className={styles.card_box_wrapper}>
        <p className={styles.heading}>최근에 만든 롤링 페이퍼 ⭐️️</p>
        <div className={styles.card_box}>
          {data.arrow ? (
            <div
              className={styles.left_arrow_box}
              ref={underLeftArrow}
              onClick={underLeftScroll}
            >
              <img className={styles.left_arrow_button} src={arrow_left} />
            </div>
          ) : undefined}
          <ul className={styles.card_box_inner} ref={underBox}>
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
          {data.arrow ? (
            <div
              className={styles.right_arrow_box}
              ref={underRightArrow}
              onClick={underRightScroll}
            >
              <img className={styles.right_arrow_button} src={arrow_right} />
            </div>
          ) : undefined}
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
