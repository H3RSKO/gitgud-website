import styles from "../styles/Home.module.css";
const { useState } = require("react");
import Introduction from "./introduction.mdx";
import Installation from "./installation.mdx";
import Functionality from "./functionality.mdx";
import Contributing from "./contribution.mdx";
import Header from "./components/header";

export default function Docs() {
  const [currentMd, setCurrentMd] = useState("introduction");
  const pages = [
    {
      page: "introduction",
      text: "Introduction",
      data: Introduction,
    },
    {
      page: "installation",
      text: "Installation & Usage",
      data: Installation,
    },
    {
      page: "functionality",
      text: "Functionality",
      data: Functionality,
    },
    {
      page: "contribution",
      text: "Contribution",
      data: Contributing,
    },
  ];

  return (
    <div className={styles.doc__container}>
      <Header />
      <div className={styles.doc__navLinks}>
        <h2 className={styles.doc__smallTitle}>Documentation</h2>

        <div className={styles.doc__flexContainer}>
          <div className={styles.doc__docLinks}>
            {pages.map((page) => {
              return (
                <a
                  className={`${styles.doc__docLink}
                  ${page.page === currentMd ? styles.doc__docLinkActive : ""}`}
                  onClick={() => setCurrentMd(page.page)}
                >
                  {page.text}
                </a>
              );
            })}
          </div>
          <div className={styles.doc__testing}>
            {React.createElement(
              pages.filter((page) => page.page === currentMd)[0].data,
              {}
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
