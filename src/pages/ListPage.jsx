import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../components/ui-card/Card";

export function ListPage() {
  //'https://rolling-api.vercel.app/2-7/recipients/'
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
    })();
  }, []);

  return (
    <>
      <div id="wrapper">
        <p className="heading">인기 롤링 페이퍼</p>
        <div>
          {/*{data.arrow ? <img></img> : {}}*/}
          <ul className="card_box">
            {data.cardData
              .sort((a, b) => b.messageCount - a.messageCount)
              .map((item) => (
                <li key={item.id}>
                  <Card response={item}></Card>
                </li>
              ))}
          </ul>
          {/*{data.arrow ? <img></img> : {}}*/}
        </div>
        <p className="heading">최근에 만든 롤링 페이퍼</p>
        <div>
          {/*{data.arrow ? <img></img> : {}}*/}
          <ul className="card_box">
            {data.cardData
              .sort(
                (a, b) =>
                  new Date(a[toString(a.createAt)]).getTime() -
                  new Date(b[b.createAt])
              )
              .map((item) => (
                <li key={item.id}>
                  <Card response={item}></Card>
                </li>
              ))}
          </ul>
          {/*{data.arrow ? <img></img> : {}}*/}
        </div>
        <div className="link_box">
          <Link to="/Post" className="link_to_post">
            나도 만들어보기
          </Link>
        </div>
      </div>
    </>
  );
}
