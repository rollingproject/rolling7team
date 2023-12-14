export function InputName({ children }) {
  return (
    <>
      <label htmlFor="InputName">{children}</label>
      <input id="InputName" type="text" />
    </>
  );
}
