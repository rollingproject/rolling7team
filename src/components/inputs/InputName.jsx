import styles from "./InputName.module.scss";

export function InputName({ children }) {
  return (
    <>
      <label className={styles.label__name} htmlFor="InputName">
        {children}
      </label>
      <input className={styles.input__name} id="InputName" type="text" name="name" />
    </>
  );
}
