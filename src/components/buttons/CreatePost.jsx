import { axiosInstance } from "../util/axiosInstance.js";
import styles from "./CreatePost.module.scss";
import { useNavigate } from "react-router-dom";

export function CreatePost({ userData, isActivated }) {
  const navigate = useNavigate();
  const dataObj = {
    name: userData.name,
    backgroundColor: userData.backgroundColor,
  };
  userData.backgroundImageURL ? (dataObj.backgroundImageURL = userData.backgroundImageURL) : null;

  function handlePostToApi(e) {
    e.preventDefault();

    if (!isActivated) return;

    axiosInstance
      .post("recipients/", dataObj)
      .then((response) => {
        navigate(`/post/${response.data.id}`);
        window.location.reload(); // gnb 버그로 인한 임시추가
      })
      .catch((error) => {
        console.error("API 호출 중 오류 발생:", error); // 오류 처리
      });
  }

  return (
    <button onClick={handlePostToApi} className={styles.Form__button}>
      {!isActivated ? "이름을 입력하세요." : "생성하기"}
      {!isActivated && <div className={styles.button__div__disabled}></div>}
    </button>
  );
}
