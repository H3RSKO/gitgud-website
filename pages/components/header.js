import styles from "../../styles/Home.module.css";

export default function Header() {

  return (
    <div className={styles.header}>
      <a href="/" >
        <img src="/GGLogo.png" style={{width: "12vw"}}/>
      </a>
    </div>
  )
}