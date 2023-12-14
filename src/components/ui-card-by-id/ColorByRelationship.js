import styles from "./CardById.module.scss";

export const colorByRelationship = (relationship) => {
  switch (relationship) {
    case "친구":
      return styles.blue;
    case "가족":
      return styles.green;
    case "동료":
      return styles.purple;
    case "지인":
      return styles.orange;
  }
};
