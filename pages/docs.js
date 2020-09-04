import styles from "../styles/Home.module.css";
const { useState } = require("react");
import { Button } from "@material-ui/core";
import Test from "./test.mdx";
import Introduction from "./introduction.mdx";
import Installation from "./installation.mdx";
import Functionality from "./functionality.mdx";
import Contributing from "./contribution.mdx";

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
            {currentMd === "introduction" ? (
              <a
                style={{ color: "limegreen" }}
                onClick={() => setCurrentMd("introduction")}
              >
                Introduction
              </a>
            ) : (
              <a onClick={() => setCurrentMd("introduction")}>Introduction</a>
            )}
            <br />
            <br />
            {currentMd === "installation" ? (
              <a
                style={{ color: "limegreen" }}
                onClick={() => setCurrentMd("installation")}
              >
                Installation & Usage
              </a>
            ) : (
              <a onClick={() => setCurrentMd("installation")}>
                Installation & Usage
              </a>
            )}
            <br />
            <br />
            {currentMd === "functionality" ? (
              <a
                style={{ color: "limegreen" }}
                onClick={() => setCurrentMd("functionality")}
              >
                Functionality
              </a>
            ) : (
              <a onClick={() => setCurrentMd("functionality")}>Functionality</a>
            )}
            <br />
            <br />
            {currentMd === "contribution" ? (
              <a
                style={{ color: "limegreen" }}
                onClick={() => setCurrentMd("contribution")}
              >
                Contribution
              </a>
            ) : (
              <a onClick={() => setCurrentMd("contribution")}>Contribution</a>
            )}
          </div>
          <div className={styles.doc__testing}>
            {currentMd === "introduction" && <Introduction></Introduction>}
            {currentMd === "installation" && <Installation></Installation>}
            {currentMd === "functionality" && <Functionality></Functionality>}
            {currentMd === "contribution" && <Contributing></Contributing>}
          </div>
        </div>
      </div>
    </div>
  );
}
