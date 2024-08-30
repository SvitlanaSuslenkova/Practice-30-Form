import styles from "./InputCheckbox.module.css";

interface IInputCheckbox {
  id: string;
  onClick: (event: React.MouseEvent<HTMLInputElement>) => void;
  term: string;
}

export default function InputCheckbox({ id, onClick, term }: IInputCheckbox) {
  return (
    <>
      <input
        type="checkbox"
        id={id}
        onClick={onClick}
        className={styles.checkboxInput}
        defaultChecked={term == "year" ? true : false}
      ></input>
      <label htmlFor={id} className={styles.checkboxLabel}></label>
    </>
  );
}
// label ONLY AFTER INPUT
