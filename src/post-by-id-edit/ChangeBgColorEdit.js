import styles from "../pages/PostByIdEditPage.module.scss";

export const changeBgColorEdit = (backgroundColor) => {
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
