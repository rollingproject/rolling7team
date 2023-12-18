import { useEffect, useState } from "react";
import { InputName } from "../components/inputs/InputName";
import styles from "./MessagePage.module.scss";
import defaultProfile from "../assets/defaultProfile.png";
import { CreateMessage } from "../components/buttons/CreateMessage";

function ProfileImgSelector() {
  // const [profileImg, setProfileImg] = useState(defaultProfile);

  return (
    <>
      <label className={styles.profileContainer}>
        <div>프로필 이미지</div>
        <img className={styles.profileContainer__img} src={defaultProfile} />
      </label>
    </>
  );
}

function RelationSelector({ messageData, setMessageData }) {
  function handleSetRelationData(e) {
    setMessageData({ ...messageData, relationship: e.target.value });
  }

  return (
    <>
      <label>상대와의 관계</label>
      <select name="" id="" onChange={handleSetRelationData}>
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
      <label htmlFor="">내용을 입력해 주세요</label>
      <textarea onBlur={handleSetMessage} name="" id="" cols="30" rows="10"></textarea>
    </>
  );
}

function FontSelector({ messageData, setMessageData }) {
  function handleSetFont(e) {
    setMessageData({ ...messageData, font: e.target.value });
  }

  return (
    <>
      <label>폰트 선택</label>
      <select name="" id="" onChange={handleSetFont}>
        <option value="Noto Sans">Noto Sans</option>
        <option value="Pretendard">Pretendard</option>
        <option value="나눔명조">나눔명조</option>
        <option value="나눔손글씨 손펴지체">나눔손글씨 손편지체</option>
      </select>
    </>
  );
}

export function MessagePage() {
  const [messageData, setMessageData] = useState({
    sender: "",
    profileImageURL: defaultProfile,
    relationship: "지인",
    content: "",
    font: "Noto Sans",
  });
  const isMessage = true;

  useEffect(() => {
    console.log(messageData);
  }, [messageData]);

  return (
    <form className={styles.form} action="">
      <InputName isMessage={isMessage} userData={messageData} setUserInputData={setMessageData}>
        From.
      </InputName>
      <ProfileImgSelector />
      <RelationSelector messageData={messageData} setMessageData={setMessageData} />
      <MessageEditor messageData={messageData} setMessageData={setMessageData} />
      <FontSelector messageData={messageData} setMessageData={setMessageData} />
      <CreateMessage messageData={messageData} />
    </form>
  );
}
