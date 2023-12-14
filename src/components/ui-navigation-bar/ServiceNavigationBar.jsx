// ServiceNavigationBar.jsx

import styles from "./ServiceNavigationBar.module.scss";
import ellipse from "../../assets/Ellipse.svg";

function ServiceNavigationBar() {
  return (
    <div className={styles.nav}>
      <div className={styles.nav__service}>
        <div className={styles.nav__frame}>
          <p className={styles.nav__text}>To. {}</p>

          <div className={styles.nav__contentsFrame}>
            <div className={styles.nav__writerBox}>
              <div className={styles.nav__writer}>
                <div className={styles.nav__writerPictureBox}>
                  <div className={styles.nav__writerPictureFrame}>
                    <div className={styles.nav__writerPictureImg}></div>
                  </div>
                </div>
                <div className={styles.nav__writerPictureBox}>
                  <div className={styles.nav__writerPictureFrame}>
                    <div className={styles.nav__writerPictureImg}>{}</div>
                  </div>
                </div>
                <div className={styles.nav__writerPictureBox}>
                  <div className={styles.nav__writerPictureFrame}>
                    <div className={styles.nav__writerPictureImg}></div>
                  </div>
                </div>
                <div className={styles.nav__writingNumberBox}>
                  <img
                    className={styles.nav__ellipse}
                    src={ellipse}
                    alt="원형이미지"
                  />
                  <p className="nav__writeNumber">+{}</p>
                </div>
              </div>

              <p style={{ fontWeight: 700 }}>{}</p>
              <p className={styles.nav__writeNumber}>명이 작성했어요 !</p>
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
                  <div className={styles.nav__arrowImg}></div>
                </button>
              </div>

              <div className={styles.nav__emojiAddAndShareBox}>
                <button className={styles.nav__emojiAddButton}>
                  <div className={styles.nav__emogiAddButtonFrame}>
                    <div className={styles.nav__emojiAddImg}></div>
                    <p>추가</p>
                  </div>
                </button>

                <div className={styles.nav__reactangle}></div>

                <button className={styles.nav__shareButton}>
                  <div className={styles.nav__shareButtonFrame}>
                    <div className={styles.nav__shareButtonImg}></div>
                  </div>
                </button>
              </div>
            </div>
            {""}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceNavigationBar;
