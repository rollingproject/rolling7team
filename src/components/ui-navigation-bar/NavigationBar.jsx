import styles from "./NavigationBar.module.scss";
import RollingIcon from "../../assets/RollingIcon.svg";
import { Link, useLocation } from "react-router-dom";

function NavigationBar() {
  const location = useLocation();
  const isLandingPage =
    location.pathname === "/" || location.pathname === "/list";

  return (
    <div className={styles.nav}>
      <div className={styles.nav__frame}>
        <div className={styles.nav__logo__wrapper}>
          <Link to={"/"}>
            <img
              className={styles.logo__image}
              src={RollingIcon}
              alt="RollingIconImg"
            />
          </Link>
          <Link to={"/"}>
            <span className={styles.logo__text}>Rolling</span>
          </Link>
        </div>

        {isLandingPage && (
          <Link to={"/post"} className={styles.nav__button}>
            <button className={styles.nav__font}>롤링 페이퍼 만들기</button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default NavigationBar;
