import styles from "./index.module.css";
import Link from "next/link";

export default function Table({ data, totalResults }) {
  return (
    <div className={styles.table__wrapper}>
      <table className={styles.table}>
        <caption>Movie List - Total: {totalResults}</caption>
        <thead>
          <tr>
            {Object.keys(data[0]).map((item, index) => {
              return item !== "Poster" && <th key={index}>{item}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td>
                  <Link href={`/movie/${encodeURIComponent(`${item.imdbID}`)}`}>
                    <a>{item.Title}</a>
                  </Link>
                </td>
                <td>
                  <Link href={`/movie/${encodeURIComponent(`${item.imdbID}`)}`}>
                    <a>{item.Year}</a>
                  </Link>
                </td>
                <td>
                  <Link href={`/movie/${encodeURIComponent(`${item.imdbID}`)}`}>
                    <a>{item.imdbID}</a>
                  </Link>
                </td>
                <td>
                  <Link href={`/movie/${encodeURIComponent(`${item.imdbID}`)}`}>
                    <a>{item.Type}</a>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
