import styles from "./CardByIdList.module.scss";

export const CardByIdList = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
