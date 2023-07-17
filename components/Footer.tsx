import Link from "next/link";
import styles from "../styles/Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.pageFooter}>
      <Link href="https://github.com/freitasgouvea">Created by Flavio Gouvea</Link>
    </footer>
  );
};
