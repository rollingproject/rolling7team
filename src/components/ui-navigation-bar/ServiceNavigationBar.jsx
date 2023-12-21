// ServiceNavigationBar.jsx
import { useState } from "react";
import styles from "./ServiceNavigationBar.module.scss";
import arrowDown from "../../assets/arrowDown.svg";
import addIcon from "../../assets/addIcon.svg";
import shareIcon from "../../assets/shareIcon.svg";
import KakaoShareModal from "../../post-by-id/ui-kakaoShare-modal/KakaoShareModal.jsx/KakaoShareModal";
import ArrowDropDownModal from "../../post-by-id/ui-arrowDropdown-modal/arrowDropDownModal";
import Toast from "../../post-by-id/ui-share-toast/Toast";
import EmojiPicker from "emoji-picker-react";
import { axiosInstance } from "../util/axiosInstance";

function ServiceNavigationBar({
  userId,
  name,
  plusNumber,
  messageCount,
  reactions,
  recentProfileImages,
}) {
  const [emojiText, setEmojiText] = useState("");
  const [showEmoji, setShowEmoji] = useState(false);

  const [isArrowDropDown, setArrowDropDown] = useState(false);
  const [isKakaoModalVisible, setKakaoModalVisible] = useState(false);
  const [isSuccessMessage, setSuccessMessage] = useState(false);

  // const [newReactions, setNewReactions] = useState(...reactions);

  // console.log(newReactions);

  // 최대 3개까지만 표시되도록 slice 사용
  const displayedReactions = reactions.slice(0, 3);
  console.log(displayedReactions);

  const onEmojiClick = (e) => {
    setEmojiText(e.emoji);
    setShowEmoji(false);

    const body = { emoji: e.emoji, type: "increase" };
    axiosInstance
      .post(`recipients/${userId}/reactions/`, body)
      .then((response) => console.log("이모지 등록 성공", response))
      .catch((error) => console.log("이모지 등록 실패했습니다.", error));
  };

  const handleClickEmoji = () => {
    setShowEmoji((prevShowEmoji) => !prevShowEmoji);
  };

  const handleArrowDropDownClick = () => {
    setArrowDropDown(!isArrowDropDown);
  };

  const handleShareButtonClick = () => {
    setShowEmoji(false);
    setKakaoModalVisible(!isKakaoModalVisible);
  };

  const handleEmojiClose = () => {
    setShowEmoji(false);
    setArrowDropDown(false);
  };

  return (
    <>
      {isSuccessMessage && <Toast setSuccessMessage={setSuccessMessage} />}
      {(showEmoji || isArrowDropDown) && (
        <div className={styles.document} onClick={handleEmojiClose} />
      )}
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
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  <div className={styles.nav__writingNumberBox}>
                    <p className={styles.nav__userNumber}>
                      + {Math.max(plusNumber, 0)}
                    </p>
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
                      <p>{count}</p>
                    </div>
                  ))}
                  {/* <div>{emojiText}</div> */}
                </div>

                <div className={styles.nav__arrowContainer}>
                  <button
                    className={styles.nav__arrowBox}
                    onClick={handleArrowDropDownClick}
                  >
                    <img src={arrowDown} alt="arrowDown" />
                  </button>
                  {isArrowDropDown && (
                    <ArrowDropDownModal reactions={reactions} />
                  )}
                </div>
              </div>

              <div className={styles.nav__emojiAddAndShareBox}>
                <div
                  className={styles.nav__emojiAddButton}
                  onClick={handleClickEmoji}
                >
                  <div className={styles.nav__emojiAddButtonFrame}>
                    <img src={addIcon} alt="addIcon" />
                    <p className={styles.nav__emojiFont}>추가</p>
                  </div>
                </div>

                <div className={styles.nav__reactangle}></div>
                <div className={styles.nav__shareButtonBox}>
                  <button
                    className={styles.nav__shareButton}
                    onClick={handleShareButtonClick}
                  >
                    <div className={styles.nav__shareButtonFrame}>
                      <img src={shareIcon} alt="shareIcon" />
                    </div>
                  </button>
                  {isKakaoModalVisible && (
                    <KakaoShareModal
                      isSuccessMessage={isSuccessMessage}
                      setSuccessMessage={setSuccessMessage}
                      setKakaoModalVisible={setKakaoModalVisible}
                    />
                  )}
                </div>
              </div>
              {showEmoji && (
                <div className={styles.nav__pickerBox}>
                  <div className={styles.nav__picker}>
                    <EmojiPicker onEmojiClick={onEmojiClick} />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceNavigationBar;
