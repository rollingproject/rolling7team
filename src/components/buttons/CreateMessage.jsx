import { axiosInstance } from "../util/axiosInstance";
import styles from "./CreatePost.module.scss";
import { useNavigate } from "react-router-dom";

export function CreateMessage({ messageData }) {
  const navigate = useNavigate();
  const path = window.location.pathname;
  const id = path.split("/")[2];

  async function handleMessageToApi(e) {
    e.preventDefault();

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
