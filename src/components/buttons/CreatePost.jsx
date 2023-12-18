import { axiosInstance } from "../util/axiosInstance";
import styles from "./CreatePost.module.scss";
import { useNavigate } from "react-router-dom";

export function CreatePost({ userData }) {
  const navigate = useNavigate();

  function handlePostToApi(e) {
    e.preventDefault();
    axiosInstance
      .post("recipients/", {
        name: userData.name,
        backgroundColor: userData.backgroundColor,
      })
      .then((response) => {
        navigate(`/post/${response.data.id}`);
      })
      .catch((error) => {
        console.error("API 호출 중 오류 발생:", error); // 오류 처리
      });
  }

  return (
    <button
      onClick={handlePostToApi}
      className={styles.Form__button}
      disabled={userData.name === false}
    >
      생성하기
    </button>
  );
}
