import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Button } from "@material-ui/core";
import Header from './components/header'

export default function Home() {
  function copyCodeToClipboard() {
    let copyText = document.getElementById("myInput");
    copyText.select();
    document.execCommand("copy");
  }
  copyCodeToClipboard = copyCodeToClipboard.bind(this);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <img
          className={styles.screenshot}
          src="/screenshot_1.jpg"
          width="70%"
        />
        <div className={styles.description}>
          Get started{" "}
          <div className={styles.popOver}>
            <code className={styles.code} onClick={copyCodeToClipboard}>
              npm install -g gitgud
            </code>
            <span>Click to copy</span>
          </div>
          <input
            type="text"
            value="npm install -g gitgud"
            className={styles.myInput}
            id="myInput"
          ></input>
        </div>
        <div className={styles.grid}>
          <a href="/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about gitgud and its features.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/GitGud-org/GitGud"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitGud©
          {/* <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} /> */}
        </a>
      </footer>
    </div>
  );
}
