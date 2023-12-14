import { Link } from "react-router-dom";
import styles from "../ui-navigation-bar/NavigationBar.module.scss";

export function MakeRollingPaper({ isLandingPage, children }) {
  return (
    <>
      {/* 롤링 페이퍼 만들기 버튼*/}
      <Link className={styles.nav__button} to={isLandingPage && "/post"}>
        <button className={styles.nav__font}>{children}</button>
      </Link>
    </>
  );
}
