import { Link } from "react-router-dom";
import styles from "./LinkToNextPage.module.scss";

export function LinkToNextPage({ children, isLandingPage }) {
  return (
    <Link className={styles.Link} to={isLandingPage ? "/list" : "/post"}>
      <button className={styles.Link__button}>{children}</button>
    </Link>
  );
}
