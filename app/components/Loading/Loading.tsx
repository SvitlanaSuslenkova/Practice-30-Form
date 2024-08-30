import { CgSpinner } from "react-icons/cg";
import styles from "./Loading.module.css";
export default function Loading() {
  return (
    <div>
      <CgSpinner className={styles.spinner} />
    </div>
  );
}
