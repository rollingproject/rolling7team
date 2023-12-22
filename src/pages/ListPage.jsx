import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Card from "../components/ui-card/Card_list";
import arrow_left from "../assets/arrow_left.svg";
import arrow_right from "../assets/arrow_right.svg";
import styles from "./ListPage.module.scss";

export function ListPage() {
  const [data, setData] = useState({ cardData: [], count: 0, arrow: false });
  const [showArrow, setShowArrow] = useState([
    { overLeft: false, overRight: true },
    { underLeft: false, underRight: true },
  ]);
  const overBox = useRef();
  const underBox = useRef();

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

  function LeftScroll(e) {
    const scrollDistance = -295;
    e.target.parentNode.parentNode.scrollTo({
      left: e.target.parentNode.parentNode.scrollLeft + scrollDistance,
      behavior: "smooth",
    });
  }

  function RightScroll(e) {
    const scrollDistance = 295;
    e.target.parentNode.parentNode.scrollTo({
      left: e.target.parentNode.parentNode.scrollLeft + scrollDistance,
      behavior: "smooth",
    });
  }

  function overBoxScroll() {
    setShowArrow((prevState) => [
      ...prevState,
      (prevState[0].overLeft = overBox.current.scrollLeft !== 0),
      (prevState[0].overRight = overBox.current.scrollLeft + overBox.current.clientWidth !== overBox.current.scrollWidth),
    ]);
  }

  function underBoxScroll() {
    setShowArrow((prevState) => [
      ...prevState,
      (prevState[1].underLeft = underBox.current.scrollLeft !== 0),
      (prevState[1].underRight = underBox.current.scrollLeft + underBox.current.clientWidth !== underBox.current.scrollWidth),
    ]);
  }

  return (
    <div id={styles.wrapper}>
      <div className={styles.card_box_wrapper}>
        <p className={styles.heading}>인기 롤링 페이퍼 🔥</p>
        <div className={styles.card_box}>
          <ul
            className={styles.card_box_inner}
            ref={overBox}
            onScroll={overBoxScroll}
          >
            {data.arrow && showArrow[0].overLeft ? (
              <div
                className={styles.left_arrow_box}
                onClick={(e) => LeftScroll(e)}
              >
                <img
                  className={styles.left_arrow_button}
                  src={arrow_left}
                  alt="left"
                />
              </div>
            ) : undefined}
            {data.cardData
              .sort((a, b) => b.messageCount - a.messageCount)
              .map((item) => (
                <li key={item.id} className={styles.card}>
                  <Card item={item}></Card>
                </li>
              ))}
            {data.arrow && showArrow[0].overRight ? (
              <div
                className={styles.right_arrow_box}
                onClick={(e) => RightScroll(e)}
              >
                <img
                  className={styles.right_arrow_button}
                  src={arrow_right}
                  alt="right"
                />
              </div>
            ) : undefined}
          </ul>
        </div>
      </div>
      <div className={styles.card_box_wrapper}>
        <p className={styles.heading}>최근에 만든 롤링 페이퍼 ⭐️️</p>
        <div className={styles.card_box}>
          <ul
            className={styles.card_box_inner}
            ref={underBox}
            onScroll={underBoxScroll}
          >
            {data.arrow && showArrow[1].underLeft ? (
              <div
                className={styles.left_arrow_box}
                onClick={(e) => LeftScroll(e)}
              >
                <img className={styles.left_arrow_button} src={arrow_left} />
              </div>
            ) : undefined}
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
            {data.arrow && showArrow[1].underRight ? (
              <div
                className={styles.right_arrow_box}
                onClick={(e) => RightScroll(e)}
              >
                <img className={styles.right_arrow_button} src={arrow_right} />
              </div>
            ) : undefined}
          </ul>
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