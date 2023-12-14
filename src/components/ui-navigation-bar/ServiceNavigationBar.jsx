// ServiceNavigationBar.jsx

import styles from "./ServiceNavigationBar.module.scss";
import ellipse from "../../assets/Ellipse.svg";
import arrowDown from "../../assets/arrowDown.svg";
import addIcon from "../../assets/addIcon.svg";
import shareIcon from "../../assets/shareIcon.svg";

function ServiceNavigationBar() {
  return (
    <div className={styles.nav}>
      <div className={styles.nav__service}>
        <p className={styles.nav__text}>To. {}</p>
        <div className={styles.nav__contentsFrame}>
          <div className={styles.nav__writerBox}>
            <div className={styles.nav__writer}>
              <div className={styles.nav__writerPictureBox}>
                <div className={styles.nav__writerPictureFrame}>
                  <div className={styles.nav__writerPictureImg}></div>
                </div>
              </div>

              <div className={styles.nav__writingNumberBox}>
                <p className={styles.nav__writeNumber}>+{}</p>
                <img
                  className={styles.nav__ellipse}
                  src={ellipse}
                  alt="원형이미지"
                />
              </div>
            </div>

            <h1>{}</h1>
            <span className={styles.nav__writeNumber}>명이 작성했어요 !</span>
          </div>

          <div className={styles.nav__reactangle}></div>

          <div className={styles.nav__reactionShareFrame}>
            <div className={styles.nav__reactionAndArrowBox}>
              <div className={styles.nav__reactionBox}>
                <div className={styles.nav__badgeEmoji}></div>
                <div className={styles.nav__badgeEmoji}></div>
                <div className={styles.nav__badgeEmoji}></div>
              </div>

              <button className={styles.nav__arrowBox}>
                <img src={arrowDown} alt="arrowDown" />
              </button>
            </div>

            <div className={styles.nav__emojiAddAndShareBox}>
              <button className={styles.nav__emojiAddButton}>
                <div className={styles.nav__emojiAddButtonFrame}>
                  <img src={addIcon} alt="addIcon" />
                  <p>추가</p>
                </div>
              </button>

              <div className={styles.nav__reactangle}></div>

              <button className={styles.nav__shareButton}>
                <div className={styles.nav__shareButtonFrame}>
                  <img src={shareIcon} alt="shareIcon" />
                </div>
              </button>
            </div>
          </div>
          {""}
        </div>
      </div>
    </div>
  );
}

export default ServiceNavigationBar;
