import React from "react";
import styles from "./InputCheckbox.module.css";

interface IInputCheckbox {
  id: string;
  //value: string;
  //onChange: (event: React.MouseEvent<HTMLInputElement>) => void;
  // onChange: (event: React.ChangeEvent<HTMLElement>) => void;
  defaultChecked: boolean;
}

const InputCheckbox: React.FC<IInputCheckbox> = ({
  id,
  //onChange,
  defaultChecked,

  //onChange,
}) => {
  return (
    <div className={styles.checkboxwrapper21}>
      <label
        htmlFor={id}
        className={`${styles.control} ${styles.controlcheckbox}`}
      >
        <input
          type="checkbox"
          id={id}
          // onClick={onClick}
          className={styles.checkbox}
          checked={defaultChecked}
          // onChange={onChange}
          readOnly
        />
        <div className={styles.control__indicator}></div>
        <span className={styles.checkmark}></span>
      </label>
    </div>
  );
};

export default InputCheckbox;
