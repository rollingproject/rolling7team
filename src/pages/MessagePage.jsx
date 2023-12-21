import { useEffect, useState } from "react";
import { InputName } from "../components/inputs/InputName.jsx";
import styles from "./MessagePage.module.scss";
import { CreateMessage } from "../components/buttons/CreateMessage.jsx";
import axios from "axios";
const DEFAULT_PROFILE_URL = "https://i.ibb.co/RBZ4fWT/default-Profile.png";

function createFileName() {
  const now = new Date();
  const fileName =
    String(now.getFullYear()) +
    String(now.getMonth() + 1) +
    String(now.getDate()) +
    String(now.getHours()) +
    String(now.getMinutes()) +
    String(now.getSeconds());
  return fileName;
}

function ProfileImgSelector({ messageData, setMessageData }) {
  // const [imgDeleteUrl, setImgDeleteUrl] = useState("");

  async function handleFileChange(e) {
    // if (imgDeleteUrl) {
    //   await axios({
    //     method: "post",
    //     delete_url: imgDeleteUrl,
    //   }).catch((error) => console.log(error));
    // }
    // ImgBB api로 이미지 삭제가 안됨
    // ImgBB 중복이미지 하나만 올라감

    const file = e.target.files[0];
    let body = new FormData();
    body.set("key", "c50b28d011b978cf725b14c4c77af8f9");
    body.append("image", file);
    body.append("name", createFileName());
    await axios({
      method: "post",
      url: "https://api.imgbb.com/1/upload",
      data: body,
    }).then((response) => {
      setMessageData({
        ...messageData,
        profileImageURL: response.data.data.display_url,
      });
      // setImgDeleteUrl(response.data.data.delete_url);
    });
  }

  function handleProfileImgReset(e) {
    const inputElement = document.querySelector(".imgInput");
    inputElement.value = null;
    setMessageData({ ...messageData, profileImageURL: DEFAULT_PROFILE_URL });
  }

  return (
    <>
      <div className={styles.form__div__title}>프로필 이미지</div>
      <div className={styles.profileContainer}>
        <img
          className={styles.profileContainer__img}
          src={messageData.profileImageURL}
        />
        <div className={styles.descriptAndButton}>
          <p>
            프로필 이미지를 선택하세요.
            <br />
            <span>(선택하지 않으면 기본 이미지가 선택됩니다.)</span>
          </p>
          <div>
            <button type="button" id={styles.imgSelector}>
              <input
                id={styles.imgInput}
                className="imgInput"
                onChange={handleFileChange}
                type="file"
                accept="image/png, image/jpeg"
              />
              <label htmlFor={styles.imgInput}>파일 선택하기</label>
            </button>
            <button
              onClick={handleProfileImgReset}
              type="button"
              className={styles.button__reset}
            >
              리셋
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function RelationSelector({ messageData, setMessageData }) {
  function handleSetRelationData(e) {
    setMessageData({ ...messageData, relationship: e.target.value });
  }

  return (
    <>
      <label className={styles.form__label__title}>상대와의 관계</label>
      <select className={styles.form__select} onChange={handleSetRelationData}>
        <option value="지인">지인</option>
        <option value="친구">친구</option>
        <option value="동료">동료</option>
        <option value="가족">가족</option>
      </select>
    </>
  );
}

function MessageEditor({ messageData, setMessageData }) {
  function handleSetMessage(e) {
    setMessageData({ ...messageData, content: e.target.value });
  }

  return (
    <>
      <label className={styles.form__label__title} htmlFor="textarea">
        내용을 입력해 주세요
      </label>
      <textarea
        onBlur={handleSetMessage}
        name=""
        id="textarea"
        cols="30"
        rows="10"
      ></textarea>
    </>
  );
}

function FontSelector({ messageData, setMessageData }) {
  function handleSetFont(e) {
    setMessageData({ ...messageData, font: e.target.value });
  }

  return (
    <>
      <label className={styles.form__label__title}>폰트 선택</label>
      <select className={styles.form__select} onChange={handleSetFont}>
        <option value="Noto Sans">Noto Sans</option>
        <option value="Pretendard">Pretendard</option>
        <option value="나눔명조">나눔명조</option>
        <option value="나눔손글씨 손편지체">나눔손글씨 손편지체</option>
      </select>
    </>
  );
}

export function MessagePage() {
  const [messageData, setMessageData] = useState({
    sender: "",
    profileImageURL: DEFAULT_PROFILE_URL,
    relationship: "지인",
    content: "",
    font: "Noto Sans",
  });
  const isMessage = true;

  const [isActivated, setIsActivated] = useState(false);

  useEffect(() => {
    if (messageData.sender && messageData.content) {
      setIsActivated(true);
    } else {
      setIsActivated(false);
    }
  }, [messageData.sender, messageData.content]);

  return (
    <form className={styles.form} action="">
      <InputName
        isMessage={isMessage}
        userData={messageData}
        setUserInputData={setMessageData}
      >
        From.
      </InputName>
      <ProfileImgSelector
        messageData={messageData}
        setMessageData={setMessageData}
      />
      <RelationSelector
        messageData={messageData}
        setMessageData={setMessageData}
      />
      <MessageEditor
        messageData={messageData}
        setMessageData={setMessageData}
      />
      <FontSelector messageData={messageData} setMessageData={setMessageData} />
      <CreateMessage isActivated={isActivated} messageData={messageData} />
    </form>
  );
}
