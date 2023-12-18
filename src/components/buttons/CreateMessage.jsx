import { axiosInstance } from "../util/axiosInstance";
import styles from "./CreatePost.module.scss";
import { useNavigate } from "react-router-dom";

export function CreateMessage({ messageData }) {
  const navigate = useNavigate();

  const path = window.location.pathname;
  console.log(path);
  const id = path.split("/")[2];
  console.log(id);
  console.log(messageData, 11);

  function handleMessageToApi(e) {
    e.preventDefault();
    axiosInstance
      .post(`recipients/${id}/messages/`, {
        sender: messageData.sender,
        relationship: messageData.relationship,
        content: messageData.content,
        font: messageData.font,
        profileImageURL: "https://slp-statics.astockcdn.net/static_assets/staging/23spring/kr/home/curated-collections/card-5.jpg",
      })
      .then((response) => {
        navigate(`/post/${response.data.id}`);
      })
      .catch((error) => {
        console.error("API 호출 중 오류 발생:", error); // 오류 처리
      });
  }

  return (
    <button onClick={handleMessageToApi} className={styles.Form__button} disabled={false}>
      생성하기
    </button>
  );
}
