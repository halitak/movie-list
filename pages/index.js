import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Filter from "../components/Filter";
import Table from "../components/Table";
import Pagination from "../components/Pagination";
import FetchMovie from "../helper/fetch";

export default function Home() {
  const [movies, setMovies] = useState({
    data: [],
    loading: true,
    error: false,
  });
  const [params, setParams] = useState({ s: "Pokemon", page: 1 });

  useEffect(() => {
    const fetchData = async () => {
      const paramsString = new URLSearchParams(clearObject(params)).toString();
      const json = await FetchMovie(paramsString);
      if (json.Response === "False") {
        setMovies({ loading: false, error: json.Error, data: [] });
      } else {
        setMovies({ loading: false, error: false, data: json });
      }
    };
    fetchData();
  }, [params]);

  const clearObject = (object) => {
    for (const key in object) {
      if (object[key] === "") {
        delete object[key];
      }
    }
    return object;
  };

  const handlePagination = (index) => {
    setParams({ ...params, page: index });
  };

  const handleFilter = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formParams = {};
    for (const pair of formData.entries()) {
      formParams[pair[0]] = pair[1];
    }
    setParams({ ...params, ...formParams, page: 1 });
  };

  return (
    <Layout>
      <Filter handleFilter={handleFilter} />
      {movies.loading || movies.error ? (
        <div className={styles.list__status}>
          {movies.loading ? "Loading" : movies.error}
        </div>
      ) : (
        <div className={styles.list__grid}>
          <Table
            data={movies.data.Search}
            totalResults={movies.data.totalResults}
          />
          <Pagination
            totalResults={movies.data.totalResults}
            currentPage={params.page}
            handlePagination={handlePagination}
          />
        </div>
      )}
    </Layout>
  );
}
