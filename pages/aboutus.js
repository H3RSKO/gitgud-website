import styles from "../styles/Home.module.css";
import Header from "./components/header";

export default function Docs() {
  return (
    <div className={styles.doc__container}>
      <Header />
      <h2 >About us!</h2>
      <div>
          <h2>Robert Harkov</h2>
          <a href="https://www.linkedin.com/in/robert-harkov/" >LinkeIn</a>
          <a href="https://github.com/rharkov" target="_blank" rel="noopener noreferrer">github</a>
      </div>
    </div>
  );
}

//do a cool cards with names and git and linkedin links
