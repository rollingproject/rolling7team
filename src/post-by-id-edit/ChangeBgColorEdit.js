import styles from "../pages/PostByIdEditPage.module.scss";

export const changeBgColorEdit = (recipientData) => {
  const imageUrl = recipientData?.backgroundImageURL;
  const color = recipientData?.backgroundColor;

  if (imageUrl == "https://i.ibb.co/f2zR969/bgImg1.jpg") {
    return styles.background__img1;
  }
  if (imageUrl == "https://i.ibb.co/6JWjMfM/bgImg2.jpg") {
    return styles.background__img2;
  }
  if (imageUrl == "https://i.ibb.co/n8GJNT2/bgImg3.jpg") {
    return styles.background__img3;
  }
  if (imageUrl == "https://i.ibb.co/8K7DwmZ/bgImg4.jpg") {
    return styles.background__img4;
  }
  if (color === "beige") {
    return styles.background__beige;
  }
  if (color === "green") {
    return styles.background__green;
  }
  if (color === "blue") {
    return styles.background__blue;
  }
  if (color === "purple") {
    return styles.background__purple;
  }
};
