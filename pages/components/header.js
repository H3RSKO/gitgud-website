import styles from "../../styles/Home.module.css";

export default function Header() {
  return (
    <div className={styles.header} style={{padding: "1em"}}>
      <a href="https://www.npmjs.com/package/gitgud">
        <img src="/npmlogo.png" style={{ width: "6vw", heigth: "4vw" }} />
      </a>
      <a href="/">
        <img src="/GGLogo-v2.png" style={{ width: "4vw", heigth: "4vw", marginLeft: '1em' }} />
      </a>
      <a href="https://github.com/GitGud-org/GitGud">
        <img src="/github.png" style={{ width: "4vw", heigth: "4vw", marginLeft: '1em' }} />
      </a>
    </div>
  );
}
