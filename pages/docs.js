import styles from "../styles/Home.module.css";
import { Button } from "@material-ui/core";
import Test from "./test.mdx";
import Home from "./home.mdx";

export default function Docs() {
  return (
    <div className={styles.doc__container}>
      <div className={styles.doc__navLinks}>
        {/* <h2 className={styles.doc__smallTitle}>Documentation</h2> */}
        <h2 className={styles.doc__smallTitle}>Documentation</h2>
        <div className={styles.doc__flexContainer}>
          <div className={styles.doc__docLinks}>
            <a href="#">HELLO</a>
          </div>
          <div className={styles.doc__testing}>
            <Home></Home>
            {/* <Test></Test> */}
          </div>
        </div>
      </div>
    </div>
  );
}
