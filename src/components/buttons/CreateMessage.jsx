import { axiosInstance } from "../util/axiosInstance.js";
import styles from "./CreatePost.module.scss";
import { useNavigate } from "react-router-dom";

export function CreateMessage({ messageData, isActivated }) {
  const navigate = useNavigate();
  const path = window.location.pathname;
  const id = path.split("/")[2];

  async function handleMessageToApi(e) {
    e.preventDefault();
    if (!isActivated) return;

    await axiosInstance
      .post(`recipients/${id}/messages/`, {
        sender: messageData.sender,
        relationship: messageData.relationship,
        content: messageData.content,
        font: messageData.font,
        profileImageURL: messageData.profileImageURL,
      })
      .then((response) => {
        navigate(`/post/${response.data.recipientId}`);
        window.location.reload(); // gnb 버그로 인한 임시추가
      })
      .catch((error) => {
        console.error("API 호출 중 오류 발생:", error); // 오류 처리
      });
  }

  return (
    <button
      onClick={handleMessageToApi}
      className={styles.Form__button}
      disabled={false}
    >
      {!isActivated ? "이름과 내용을 확인하세요." : "생성하기"}
      {!isActivated && <div className={styles.button__div__disabled}></div>}
    </button>
  );
}
