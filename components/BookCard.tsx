import styles from "../styles/BookCard.module.css";
import { Book } from "../types/book";

type BookCardProps = {
  book: Book;
};

export const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardRank}>
        <div className={styles.rank}># {book.rank}</div>
      </div>
      <div className={styles.cardHeader}>
        <div className={styles.cardHeaderInfo}>
          <p className={styles.title}>{book.title}</p>
          <p className={styles.author}>{book.contributor}</p>
          <p className={styles.description}>{book.description}</p>
        </div>
        <div className={styles.cardHeaderCover}>
          <img className={styles.bookCover} src={book.book_image} alt="Book Cover" />
        </div>
      </div>
      <div className={styles.cardFooter}>
        <div className="dropdown">
          <button className={styles.cardButton}>Buy</button>
          <div className="dropdown-content">
            {book.buy_links &&
              book.buy_links.map((item) => (
                <a href={item.url} target="blank">
                  {item.name}
                </a>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
