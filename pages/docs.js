import styles from "../styles/Home.module.css";
const { useState } = require("react");
import { Button } from "@material-ui/core";
import Test from "./test.mdx";
import Introduction from "./introduction.mdx";
import Installation from "./installation.mdx";
import Functionality from "./functionality.mdx";

export default function Docs() {
  const [currentMd, setCurrentMd] = useState("introduction");
  const [activeLink, setActiveLink] = useState(false);

  return (
    <div className={styles.doc__container}>
      <div className={styles.doc__navLinks}>
        {/* <h2 className={styles.doc__smallTitle}>Documentation</h2> */}
        <h2 className={styles.doc__smallTitle}>Documentation</h2>
        <div className={styles.doc__flexContainer}>
          <div className={styles.doc__docLinks}>
            <a onClick={() => setCurrentMd("introduction")}>Introduction</a>
            <br />
            <br />
            <a onClick={() => setCurrentMd("installation")}>
              Installation & Usage
            </a>
            <br />
            <br />
            <a onClick={() => setCurrentMd("functionality")}>Functionality</a>
          </div>
          <div className={styles.doc__testing}>
            {currentMd === "introduction" && <Introduction></Introduction>}
            {currentMd === "installation" && <Installation></Installation>}
            {currentMd === "functionality" && <Functionality></Functionality>}
          </div>
        </div>
      </div>
    </div>
  );
}
