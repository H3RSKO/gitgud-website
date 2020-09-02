import styles from "../styles/Home.module.css";
import { Button } from "@material-ui/core";
import Test from "./test.mdx";

export default function Docs() {
  return (
    <div className={styles.doc__container}>
      <div className={styles.doc__navLinks}>
        {/* <h2 className={styles.doc__smallTitle}>Documentation</h2> */}
        <div className={styles.doc__testing}>
          <h2 className={styles.doc__smallTitle}>Documentation</h2>
          <Test></Test>
        </div>
      </div>
    </div>
  );
}
