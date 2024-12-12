import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.heroVideo}>
          <video autoPlay loop muted playsInline>
            <source
              src="https://s3-figma-videos-production-sig.figma.com/video/1201541155047593386/TEAM/d367/81bf/-6d7a-4bbe-98b8-78f65984c285?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BMQhzREbUIageJD~tPMWMPa9EvAenxccoapzocLeqckhgLz0-NP8GxcIyRsWuuf08T6tzPiNYWZKOkKX1G874Xeel5hEd345xpv5a06BQR0cIY8X~lbd8g8HweFB~WW~vC7nrR0X64f0gzt7vTX0Zma6ijgWojDCtX5SJY7uU5n8G-cPSzdPjWxLsKar5ovOTs1Y3mVJcQRpeT2LiH7CcgNvcvNvWh7gaU9iPSV7ZiWMe1YEii8pAFf3WYZ4lVMw6FJoQN8yjk6xwRMTZCG0pTxZxDgpLKybSLo6EUL-4jMGDUiuWxLdXUfr8zTkYe4s-J~oXS-p-fvDuGjR-cTGsg__"
              type="video/mp4"
            />
          </video>
        </div>
      </div>

      <div className={styles.heroContent}>
        <h1 className={styles.heroHeading}>charterag</h1>
        <p>Your hero subtitle goes here.</p>
        <button className={styles.heroButton}>Get Started</button>
      </div>
    </div>
  );
}
