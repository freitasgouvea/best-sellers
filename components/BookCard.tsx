import styles from "../styles/BookCard.module.css";

export const BookCard = () => {
  return (
    <>
      <div className={styles.card}>
      <div className={styles.cardRank}>
          <div className={styles.rank}># 1</div>
        </div>
        <div className={styles.cardHeader}>
          <div className={styles.cardHeaderInfo}>
            <p className={styles.title}>The Five Star Weekend</p>
            <p className={styles.author}>by Elin Hilderbrand</p>
            <p className={styles.description}>
            After a tragedy, a popular food blogger brings friends from distinct times in her life to spend a weekend in
            Nantucket.
          </p>
          </div>
          <div className={styles.cardHeaderCover}>
            <img className={styles.bookCover} src="https://storage.googleapis.com/du-prd/books/images/9780316258777.jpg" />
          </div>
        </div>
      </div>
    </>
  );
};
