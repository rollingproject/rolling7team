import { useEffect } from "react";
import styles from "./KakaoShareModal.module.scss";
import { useGetMessagesList } from "./messageApi.js";

function KakaoApi() {
  const { Kakao } = window;
  const path = window.location.pathname;
  const userId = path.split("/")[2];

  const { data } = useGetMessagesList(userId);
  const { results } = data || {};

  const firstMessage = results && results.length > 0 ? results[0] : null;
  // 로컬로 보여주는게 아닐시 추후 수정해야함, kakaoDeveloper 사이트에서도 수정필요
  // const resultUrl = `http://localhost:5173/post/${userId}`;
  const resultUrl = `https://resonant-chimera-6a5866.netlify.app/post/${userId}`;
  useEffect(() => {
    Kakao.cleanup();
    Kakao.init(import.meta.env.VITE_KAKAO_API_KEY); // key값 적용
  }, []);

  const shareKakao = () => {
    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: `${firstMessage.relationship} ${firstMessage.sender} 님이 등록하신 메시지가 왔어요`,
        description: `${firstMessage.sender}님이(가) 작성한 롤링페이퍼를 받아보세요.`,
        imageUrl: firstMessage.profileImageURL,
        link: {
          mobileWebUrl: resultUrl,
          webUrl: resultUrl,
        },
      },
      buttons: [
        {
          title: "롤링페이퍼가 왔어요 😎",
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
