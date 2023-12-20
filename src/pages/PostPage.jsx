import { Fragment, useEffect, useState } from "react";
import { InputName } from "../components/inputs/InputName";
import styles from "./PostPage.module.scss";
import { CreatePost } from "../components/buttons/createPost";

function SelectBackground({ backgroundType, userData, setUserData }) {
  const colors = ["beige", "purple", "blue", "green"];
  const imgs = ["bgImg1", "bgImg2", "bgImg3", "bgImg4"];
  const imgsUrl = {
    bgImg1: "https://i.ibb.co/f2zR969/bgImg1.jpg",
    bgImg2: "https://i.ibb.co/6JWjMfM/bgImg2.jpg",
    bgImg3: "https://i.ibb.co/n8GJNT2/bgImg3.jpg",
    bgImg4: "https://i.ibb.co/8K7DwmZ/bgImg4.jpg",
  };

  const backgrounds = backgroundType === "color" ? colors : imgs;

  function handleSetUserData(e) {
    const selected = e.target.htmlFor;
    if (backgroundType === "color") {
      setUserData({
        ...userData,
        backgroundColor: selected,
        backgroundImageURL: "",
      });
    } else {
      setUserData({
        ...userData,
        backgroundColor: "beige",
        backgroundImageURL: imgsUrl[selected],
      });
    }
    console.log(selected);
  }

  return (
    <>
      <div className={styles.backgroundsContainer}>
        {backgrounds.map((background, index) => {
          return (
            <Fragment key={background}>
              <input id={background} type="radio" name="background" defaultChecked={index == 0} />
              <label htmlFor={background} onClick={handleSetUserData} className={styles.form__label__background}></label>
            </Fragment>
          );
        })}
      </div>
    </>
  );
}

function SelectColorOrImg({ setBackgroundType, userData, setUserData }) {
  function handleClick(e) {
    const backgroundType = e.target.value;
    setBackgroundType(backgroundType);
    if (backgroundType === "color") {
      setUserData({
        ...userData,
        backgroundColor: "beige",
        backgroundImageURL: "",
      });
    } else {
      setUserData({
        ...userData,
        backgroundColor: "beige",
        backgroundImageURL: "https://i.ibb.co/f2zR969/bgImg1.jpg",
      });
    }
  }

  return (
    <>
      <div className={styles.category}>
        <input type="radio" id="selectColorButton" value="color" onClick={handleClick} name="category" defaultChecked />
        <label className={styles.category__label} htmlFor="selectColorButton">
          컬러
        </label>
        <input type="radio" id="selectImgButton" value="image" onClick={handleClick} name="category" />
        <label className={styles.category__label} htmlFor="selectImgButton">
          이미지
        </label>
      </div>
    </>
  );
}

export function PostPage() {
  const [backgroundType, setBackgroundType] = useState("color");
  const [userData, setUserData] = useState({
    team: "7",
    name: "",
    backgroundColor: "beige",
    backgroundImageURL: "",
  });

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  return (
    <form className={styles.form} action="">
      <InputName userData={userData} setUserInputData={setUserData}>
        To.
      </InputName>
      <span className={styles.span}>배경화면을 선택해 주세요.</span>
      <p className={styles.p}>컬러를 선택하거나, 이미지를 선택할 수 있습니다.</p>
      <SelectColorOrImg userData={userData} setUserData={setUserData} setBackgroundType={setBackgroundType} />
      <SelectBackground userData={userData} setUserData={setUserData} backgroundType={backgroundType} />
      <CreatePost userData={userData}>생성하기</CreatePost>
    </form>
  );
}
