import styles from "../pages/PostByIdPage.module.scss";

export const changeBgColor = (backgroundColor) => {
  switch (backgroundColor) {
    case "beige":
      return styles.background__beige;
    case "purple":
      return styles.background__purple;
    case "blue":
      return styles.background__blue;
    case "green":
      return styles.background__green;
  }
};
