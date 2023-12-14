import { Fragment, useState } from "react";
import { InputName } from "../components/inputs/InputName";
import styles from "./PostPage.module.scss";
import { CreatePost } from "../components/buttons/createPost";

function SelectBackground({ backgroundType }) {
  const colors = ["orange-200", "purple-200", "blue-200", "green-200"];
  const imgs = ["bgImg1", "bgImg2", "bgImg3", "bgImg4"];
  const backgrounds = backgroundType === "color" ? colors : imgs;

  return (
    <>
      <div className={styles.backgroundsContainer}>
        {backgrounds.map((background, index) => {
          return (
            <Fragment key={background}>
              <input id={background} value={background} type="radio" name="background" defaultChecked={index == 0} />
              <label htmlFor={background} className={styles.form__label__background}></label>
            </Fragment>
          );
        })}
      </div>
    </>
  );
}

function SelectColorOrImg({ onClick }) {
  function handleClick(e) {
    onClick(e.target.value);
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

  function handleBackGroundType(type) {
    setBackgroundType(type);
    console.log(type);
  }

  return (
    <form className={styles.form} action="">
      <InputName>To.</InputName>
      <span className={styles.span}>배경화면을 선택해 주세요.</span>
      <p className={styles.p}>컬러를 선택하거나, 이미지를 선택할 수 있습니다.</p>
      <SelectColorOrImg onClick={handleBackGroundType} />
      <SelectBackground backgroundType={backgroundType} />
      <CreatePost>생성하기</CreatePost>
    </form>
  );
}
