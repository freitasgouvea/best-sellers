import styles from "../styles/Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.pageFooter}>
      <a href="https://developer.nytimes.com" target="blank" data-testid="nyt-link">
        <img src="https://developer.nytimes.com/files/poweredby_nytimes_200c.png?v=1583354208354" />
      </a>
      <br />
    </footer>
  );
};
