// ServiceNavigationBar.jsx
import styles from "./ServiceNavigationBar.module.scss";
import arrowDown from "../../assets/arrowDown.svg";
import addIcon from "../../assets/addIcon.svg";
import shareIcon from "../../assets/shareIcon.svg";

function ServiceNavigationBar({
  name,
  plusNumber,
  messageCount,
  reactions,
  recentProfileImages,
}) {
  // 최대 3개까지만 표시되도록 slice 사용
  const displayedReactions = reactions.slice(0, 3);
  console.log(name);

  return (
    <div className={styles.nav}>
      <div className={styles.nav__service}>
        <p className={styles.nav__text}>To. {name}</p>
        <div className={styles.nav__contentsFrame}>
          <div className={styles.nav__reactangle}></div>

          <div className={styles.nav__reactionShareFrame}>
            <div className={styles.nav__writerBox}>
              <div className={styles.nav__writer}>
                <div className={styles.nav__writerPictureBox}>
                  <div className={styles.nav__writerPictureFrame}>
                    {/* 최근 3개 프로필 이미지를 표시 */}
                    {recentProfileImages.map((imageUrl, index) => (
                      <div
                        key={index}
                        className={styles.nav__recentProfileImage}
                        style={{
                          backgroundImage: `url(${imageUrl})`,
                          backgroundSize: "cover", // 또는 'cover' 등을 사용하여 조절
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center",
                        }}
                      />
                    ))}
                  </div>
                </div>

                <div className={styles.nav__writingNumberBox}>
                  <p className={styles.nav__userNumber}>+ {plusNumber}</p>
                </div>
              </div>

              <span className={styles.nav__writeNumber}>
                <h1 className={styles.nav_messageCount}>{messageCount}</h1>
                명이 작성했어요 !
              </span>
              <div style={{ paddingLeft: 20 }}>
                <div className={styles.nav__reactangle}></div>
              </div>
            </div>
            <div className={styles.nav__reactionAndArrowBox}>
              <div className={styles.nav__reactionBox}>
                {/* 최대 3개까지만 표시되도록 map 함수 수정 */}
                {displayedReactions.map(({ id, emoji, count }) => (
                  <div key={id} className={styles.nav__badgeEmoji}>
                    {emoji}
                    {count}
                  </div>
                ))}
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
