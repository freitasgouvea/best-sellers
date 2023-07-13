import styles from "../styles/BookCard.module.css";
import { Book } from "../types/book";
import { InfoIcon } from "./InfoIcon";

export const BookCard = ({ book }: { book: Book }) => {
  const {
    rank,
    title,
    contributor,
    description,
    book_image: BookImage,
    buy_links: BuyLinks,
    weeks_on_list: weeksOnList,
    rank_last_week: rankLastWeek,
  } = book;

  const rankVariation = rankLastWeek - rank;

  const infoIconType = rankLastWeek === 0 ? "new" : rankVariation > 0 ? "up" : rankVariation < 0 ? "down" : "equal";

  return (
    <div className={styles.card}>
      <div className={styles.CardHeader}>
        <div className={styles.rank}># {rank}</div>
        <div className="tooltip">
          <InfoIcon type={infoIconType} size={24} />
          <span className="tooltiptext">
            <small>Weeks On List: {weeksOnList} </small>
            <br />
            <small>Rank Last Week: {rankLastWeek} </small>
          </span>
        </div>
      </div>
      <div className={styles.cardContent}>
        <div className={styles.cardContentInfo}>
          <p className={styles.title}>{title}</p>
          <p className={styles.author}>{contributor}</p>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.cardContentCover}>
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
