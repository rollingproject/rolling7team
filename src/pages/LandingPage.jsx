import { LinkToNextPage } from "../components/buttons/LinkToNextPage";
import styles from "./LandingPage.module.scss";

export function LandingPage() {
  const isLandingPage = window.location.pathname === "/";
  return (
    <>
      <section className={styles.container}>
        <div className={styles.text}>
          <span className={styles.text__span}>Point. 01</span>
          <h2 className={styles.text__h2}>
            누구나 손쉽게, 온라인
            <br />
            롤링 페이퍼를 만들 수 있어요
          </h2>
          <p className={styles.text__p}>로그인 없이 자유롭게 만들어요</p>
        </div>
        <div className={styles["image--point1"]}></div>
      </section>

      <section className={styles.container}>
        <div className={styles["image--point2"]}></div>
        <div className={styles.text}>
          <span className={styles.text__span}>Point. 02</span>
          <h2 className={styles.text__h2}>
            서로에게 이모지로 감정을
            <br />
            표현해보세요
          </h2>
          <p className={styles.text__p}>롤링 페이퍼에 이모지를 추가할 수 있어요.</p>
        </div>
      </section>

      <LinkToNextPage isLandingPage={isLandingPage}>구경해보기</LinkToNextPage>
    </>
  );
}
