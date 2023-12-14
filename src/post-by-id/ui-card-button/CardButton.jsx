import PLUS_IMG from "../../assets/plus.svg";
import styles from "./CardButton.module.scss";

export const CardButton = () => {
  return (
    <div className={styles.cardbutton}>
      <img src={PLUS_IMG} alt="plus 버튼 이미지" />
    </div>
  );
};
