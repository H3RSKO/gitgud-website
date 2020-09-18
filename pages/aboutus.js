import styles from "../styles/Home.module.css";
import Header from "./components/header";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

export default function Docs() {
  return (
    <div className={styles.doc__container}>
      <div className={styles.header}>
        <a href="/" className={styles.header__logo}>
          <img src="/GGLogo-v2.png" />
        </a>

        <div className={styles.header__sources}>
          <a
            href="https://www.npmjs.com/package/gitgud"
            className={styles.header__source}
          >
            <img src="/npmlogo.png" />
          </a>
          <a
            href="https://github.com/GitGud-org/GitGud"
            className={styles.header__source}
          >
            <img src="/github.png" />
          </a>
        </div>
      </div>
      <h2 className={styles.doc__smallTitle}>About us!</h2>
      <div className={styles.grid}>
        <div>
          <div className={styles.aboutus__card}>
            <img src="/robert_pic.jpeg" className={styles.aboutus__pic} />
            <h2>Robert Harkov</h2>
            <a
              href="https://www.linkedin.com/in/robert-harkov/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon className={styles.about__icons} /> LinkedIn
            </a>
            <br />
            <br />
            <a
              href="https://github.com/rharkov"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon className={styles.about__icons} /> GitHub
            </a>
          </div>
          <div className={styles.aboutus__card}>
            <img src="/angela_pic.jpeg" className={styles.aboutus__pic} />
            <h2>Angela Ratto</h2>
            <a
              href="https://www.linkedin.com/in/angelaratto/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon className={styles.about__icons} /> LinkedIn
            </a>
            <br />
            <br />
            <a
              href="https://github.com/angelato13"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon className={styles.about__icons} /> GitHub
            </a>
          </div>
        </div>
        <div>
          <div className={styles.aboutus__card}>
            <img src="/josh_pic.jpeg" className={styles.aboutus__pic} />
            <h2>Josh Pukin</h2>
            <a
              href="https://www.linkedin.com/in/joshuapukin/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon className={styles.about__icons} /> LinkedIn
            </a>
            <br />
            <br />
            <a
              href="https://github.com/jpukin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon className={styles.about__icons} /> GitHub
            </a>
          </div>
          <div className={styles.aboutus__card}>
            <img
              src="/yosef_pic.jpeg"
              style={{ width: "200px", height: "200px" }}
              className={styles.aboutus__pic}
            />
            <h2>Yosef Herskovitz</h2>
            <a
              href="https://www.linkedin.com/in/yosef-herskovitz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon className={styles.about__icons} /> LinkedIn
            </a>
            <br />
            <br />
            <a
              href="https://github.com/H3RSKO"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon className={styles.about__icons} /> GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

//do a cool cards with names and git and linkedin links
