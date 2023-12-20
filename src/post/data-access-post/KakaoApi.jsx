import { useEffect } from "react";
import styles from "./KakaoShareModal.module.scss";

function KakaoApi() {
  const { kakao } = window;
  const path = window.location.pathname;
  const userId = path.split("/")[2];

  const resultUrl = `http://localhost:5173/post/${userId}`;

  useEffect(() => {
    kakao.cleanup();
    kakao.init("2c35ffe39e537bf49016fa00a5b14528"); // key값 적용
    console.log(kakao.isInitiallized());
  }, []);

  const shareKakao = () => {
    kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "",
        description: "",
        imageUrl: "",
        link: {},
      },
      buttons: [
        {
          title: "test",
          link: {
            mobileWebUrl: resultUrl,
            webUrl: resultUrl,
          },
        },
      ],
    });
  };

  return (
    <>
      <button>
        <li
          className={styles.kakaoURLShare}
          onClick={() => {
            shareKakao();
          }}
        >
          카카오톡 공유
        </li>
      </button>
    </>
  );
}

export default KakaoApi;
