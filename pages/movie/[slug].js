import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import styles from "../../styles/Detail.module.css";
import Layout from "../../components/Layout";
import { MovieDetailKeys } from "../../Constants";
import FetchMovie from "../../Helper/Fetch";
import Image from "next/image";

export default function Product() {
  const [movie, setMovie] = useState({
    data: {},
    loading: true,
    error: false,
  });
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    const fetchData = async () => {
      const json = await FetchMovie(`plot=full&i=${slug}`);
      if (json.Response === "False") {
        setMovie({ loading: false, error: json.Error, data: [] });
      } else {
        setMovie({ loading: false, error: false, data: json });
      }
    };
    fetchData();
  }, [slug]);

  return (
    <Layout>
      <div className={styles.movie}>
        {movie.loading || movie.error ? (
          <div className={styles.movie__status}>
            {movie.loading ? "Loading" : movie.error}
          </div>
        ) : (
          <>
            <div className={styles.movie__grid}>
              <div className={styles.movie__image}>
                {movie.data.Poster.startsWith("http") && (
                  <Image
                    src={movie.data.Poster}
                    alt={movie.data.Title}
                    width={300}
                    height={450}
                  />
                )}
              </div>
              <div className={styles.movie__info}>
                <h1 className={styles.movie__title}>{movie.data.Title}</h1>
                {MovieDetailKeys.map((key, index) => {
                  return key === "Ratings" ? (
                    movie.data[key].map((item, index2) => {
                      return (
                        <p key={index2} className={styles.movie__detail}>
                          <span>{item.Source}:</span>
                          <span>{item.Value}</span>
                        </p>
                      );
                    })
                  ) : (
                    <p key={index} className={styles.movie__detail}>
                      <span>{key}:</span>
                      <span>{movie.data[key]}</span>
                    </p>
                  );
                })}
              </div>
            </div>
            <div className={styles.movie__plot}>{movie.data.Plot}</div>
          </>
        )}
      </div>
    </Layout>
  );
}
