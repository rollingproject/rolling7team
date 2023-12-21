import styles from "./ArrowDropDownModal.module.scss";

function ArrowDropDownModal({ sortedReactions }) {
  return (
    <>
      <div className={styles.arrowDropDownModal}>
        {sortedReactions.map(({ id, emoji, count }) => (
          <div key={id} className={styles.arrowDropDownModal__badgeEmoji}>
            {emoji} <p>{count}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default ArrowDropDownModal;
