import styles from "./ArrowDropDownModal.module.scss";

function ArrowDropDownModal({ reactions }) {
  return (
    <>
      <div className={styles.arrowDropDownModal}>
        {reactions.map(({ id, emoji, count }) => (
          <div key={id} className={styles.arrowDropDownModal__badgeEmoji}>
            {emoji} <p>{count}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default ArrowDropDownModal;
