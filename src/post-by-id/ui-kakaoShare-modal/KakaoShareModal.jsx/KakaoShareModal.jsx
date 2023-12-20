import KakaoApi from "../../../post/data-access-post/kakaoApi";
import styles from "./KakaoShareModal.module.scss";

function KakaoShareModal({
  setKakaoModalVisible,
  setSuccessMessage,
  // isSuccessMessage,
}) {
  const handleSuccessMessage = async () => {
    try {
      const urlToCopy = window.location.href;

      await navigator.clipboard.writeText(urlToCopy);

      // console.log("URL 복사 성공, isSuccessMessage를 설정");
      setKakaoModalVisible(false);
      setSuccessMessage(true);
      setTimeout(() => {
        // console.log("5초 후, isSuccessMessage를 false로 설정");
        setSuccessMessage(false);
      }, 5000);
    } catch (error) {
      console.error("URL 복사 실패:", error);
    }
  };

  // console.log("isSuccessMessage", isSuccessMessage);

  return (
    <>
      <div className={styles.kakaoURLShareBox}>
        <ul className={styles.kakaoURLShareFrame}>
          <KakaoApi />
          <button>
            <li className={styles.kakaoURLShare} onClick={handleSuccessMessage}>
              URL 공유
            </li>
          </button>
        </ul>
      </div>
    </>
  );
}

export default KakaoShareModal;
