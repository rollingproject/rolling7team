import styles from "./Toast.module.scss";
import successIcon from "../../assets/success.svg";
import closeIcon from "../../assets/close.svg";

function Toast({ setSuccessMessage }) {
  return (
    <>
      <div className={styles.toast}>
        <div className={styles.toast__Frame}>
          <img src={successIcon} alt="완료" />
          <p className={styles.toast__text}>URL이 복사 되었습니다.</p>
          <button className={styles.toast__closeButton}>
            <img
              onClick={() => {
                setSuccessMessage(false);
              }}
              src={closeIcon}
              alt="안내창을 닫는 버튼"
            />
          </button>
        </div>
      </div>
    </>
  );
}

export default Toast;
