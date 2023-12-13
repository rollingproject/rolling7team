import { format } from "date-fns";
import PropTypes from "prop-types"; // 이 코드는 eslint 에러로 인해 넣은 것입니다.
import styles from "./CardById.module.scss";
import { colorByRelationship } from "./ColorByRelationship";

export const CardById = ({
  sender,
  profileImageURL,
  relationship,
  content,
  createdAt,
}) => {
  function formatDate(date) {
    return format(new Date(date), "yyyy.MM.dd");
  }

  const changeClassName = colorByRelationship(relationship);

  return (
    <div className={styles.idcard}>
      <div className={styles.sender}>
        <img className={styles.sender__image} src={profileImageURL} />
        <div className={styles.sender__text}>
          <h3>
            From. <span>{sender}</span>
          </h3>
          <p className={changeClassName}>{relationship}</p>
        </div>
      </div>
      <div className={styles.content}>
        <p>{content}</p>
        <span>{formatDate(createdAt)}</span>
      </div>
    </div>
  );
};

// 아래 코드는 eslint 에러로 인해 넣은 것입니다.

CardById.propTypes = {
  sender: PropTypes.string.isRequired,
  profileImageURL: PropTypes.string.isRequired,
  relationship: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.number.isRequired,
};
