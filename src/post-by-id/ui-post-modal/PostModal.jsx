import { format } from "date-fns";
import { colorByRelationship } from "./ColorByRelationship.js";
import styles from "./PostModal.module.scss";
import { fontStyle } from "./fontStyle.js";

export const PostModal = ({ post, onClose }) => {
  const { profileImageURL, sender, relationship, createdAt, content, font } =
    post;

  const changeClassName = colorByRelationship(relationship);
  const changeFontStyle = fontStyle(font);

  function formatDate(date) {
    return format(new Date(date), "yyyy.MM.dd");
  }

  return (
    <div className={styles.background}>
      <div className={styles.modal}>
        <div className={styles.sender}>
          <img
            className={styles.sender__image}
            src={profileImageURL}
            alt="보낸 사람 프로필 이미지"
          />
          <div className={styles.sender__text}>
            <h3>
              From. <span>{sender}</span>
            </h3>
            <p className={changeClassName}>{relationship}</p>
          </div>
          <span>{formatDate(createdAt)}</span>
        </div>
        <div className={styles.content}>
          <p className={changeFontStyle}>{content}</p>
        </div>
        <button className={styles.button} onClick={onClose}>
          확인
        </button>
      </div>
    </div>
  );
};
