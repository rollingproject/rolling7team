import styles from "./NavigationBar.module.scss";
import RollingIcon from "../../assets/RollingIcon.svg";
import { MakeRollingPaper } from "../buttons/MakeRollingPaper";

function NavigationBar() {
  const isLandingPage = window.location.pathname === "/";

  return (
    <div className={styles.nav}>
      <div className={styles.nav__frame}>
        <div className={styles.nav__logo__wrapper}>
          <a href="/">
            <img
              className={styles.logo__image}
              src={RollingIcon}
              alt="RollingIconImg"
            />
          </a>

          <span className={styles.logo__text}>Rolling</span>
        </div>

        <MakeRollingPaper isLandingPage={isLandingPage}>
          롤링 페이퍼 만들기
        </MakeRollingPaper>
      </div>
    </div>
  );
}

export default NavigationBar;
