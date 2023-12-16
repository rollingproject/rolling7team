import styles from "./InputName.module.scss";

export function InputName({ children, setUserInputData, userData }) {
  function handlePressEnter(e) {
    if (e.key === "Enter") e.preventDefault();
  }

  function handleInputNameValue(e) {
    setUserInputData({ ...userData, name: e.target.value });
  }

  return (
    <>
      <label className={styles.label__name} htmlFor="InputName">
        {children}
      </label>
      <input onBlur={handleInputNameValue} onKeyDown={handlePressEnter} className={styles.input__name} id="InputName" type="text" name="name" />
    </>
  );
}
