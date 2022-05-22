import styles from "./index.module.css";
import cn from "classnames";

export default function Pagination({
  totalResults,
  currentPage,
  handlePagination,
}) {
  const size = Math.ceil(totalResults / 10);
  const array = [...Array(size).keys()];
  const showingPages =
    currentPage - 2 < 1
      ? array.slice(0, 5)
      : currentPage + 2 > size
      ? array.slice(-5)
      : array.slice(currentPage - 2 - 1, currentPage + 2);
  return (
    <div className={styles.pagination}>
      <div className={styles.pagination__inner}>
        <button
          className={styles.pagination__item}
          onClick={() => handlePagination(1)}
          disabled={currentPage === 1}
        >
          First
        </button>

        {showingPages.map((item, index) => {
          return (
            <button
              key={index}
              className={cn(
                styles.pagination__item,
                currentPage === item + 1 && styles["pagination__item--active"]
              )}
              onClick={() => handlePagination(item + 1)}
            >
              {item + 1}
            </button>
          );
        })}

        <button
          className={styles.pagination__item}
          onClick={() => handlePagination(size)}
          disabled={currentPage === size}
        >
          Last
        </button>
      </div>
      <div className={styles.pagination__result}>
        <span>Total Page:</span>
        <span>{size}</span>
      </div>
    </div>
  );
}
