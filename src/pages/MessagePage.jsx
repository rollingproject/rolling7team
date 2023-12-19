import { useEffect, useState } from "react";
import { InputName } from "../components/inputs/InputName";
import styles from "./MessagePage.module.scss";
import defaultProfile from "../assets/defaultProfile.png";
import { CreateMessage } from "../components/buttons/CreateMessage";
import axios from "axios";

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
      setMessageData({ ...messageData, profileImageURL: response.data.data.display_url });
      // setImgDeleteUrl(response.data.data.delete_url);
    });
  }

  return (
    <>
      <label className={styles.profileContainer}>
        <div>프로필 이미지</div>
        <img className={styles.profileContainer__img} src={messageData.profileImageURL} />
        <input onChange={handleFileChange} type="file" accept="image/png, image/jpge" />
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
        <option value="나눔손글씨 손편지체">나눔손글씨 손편지체</option>
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
    createFileName();
  }, [messageData]);

  return (
    <form className={styles.form} action="">
      <InputName isMessage={isMessage} userData={messageData} setUserInputData={setMessageData}>
        From.
      </InputName>
      <ProfileImgSelector messageData={messageData} setMessageData={setMessageData} />
      <RelationSelector messageData={messageData} setMessageData={setMessageData} />
      <MessageEditor messageData={messageData} setMessageData={setMessageData} />
      <FontSelector messageData={messageData} setMessageData={setMessageData} />
      <CreateMessage messageData={messageData} />
    </form>
  );
}
