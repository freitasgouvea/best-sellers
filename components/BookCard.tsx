import styles from "../styles/BookCard.module.css";
import { Book } from "../types/book";

export const BookCard = ({ book }: { book: Book }) => {
  const { rank, title, contributor, description, book_image: BookImage, buy_links: BuyLinks } = book;
  return (
    <div className={styles.card}>
      <div className={styles.cardRank}>
        <div className={styles.rank}># {rank}</div>
      </div>
      <div className={styles.cardHeader}>
        <div className={styles.cardHeaderInfo}>
          <p className={styles.title}>{title}</p>
          <p className={styles.author}>{contributor}</p>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.cardHeaderCover}>
          <img className={styles.bookCover} src={BookImage} alt="Book Cover" />
        </div>
      </div>
      <div className={styles.cardFooter}>
        <div className="dropdown">
          <button className={styles.cardButton}>Buy</button>
          <div className="dropdown-content">
            {BuyLinks &&
              BuyLinks.map((item, key) => (
                <a key={key} href={item.url} target="blank">
                  {item.name}
                </a>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
