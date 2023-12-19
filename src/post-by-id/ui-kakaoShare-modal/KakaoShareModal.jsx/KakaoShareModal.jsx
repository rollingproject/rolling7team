import styles from "./KakaoShareModal.module.scss";

function KakaoShareModal() {
  return (
    <>
      <ul className={styles.kakaoURLShareFrame}>
        <button>
          <li className={styles.kakaoURLShare}>카카오톡 공유</li>
        </button>
        <button>
          <li className={styles.kakaoURLShare}>URL 공유</li>
        </button>
      </ul>
    </>
  );
}

export default KakaoShareModal;
