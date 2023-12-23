import styles from "./PostModal.module.scss";

export const fontStyle = (font) => {
  switch (font) {
    case "Noto Sans":
      return styles.notosans;
    case "나눔명조":
      return styles.nanummyungjo;
    case "Pretendard":
      return styles.pretendard;
    case "나눔손글씨 손편지체":
      return styles.nanumhand;
  }
};
