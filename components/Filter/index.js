import styles from "./index.module.css";
import Input from "../input";
import { filterInputs } from "../../constants";

export default function Filter({ handleFilter }) {
  return (
    <form className={styles.filter} onSubmit={(e) => handleFilter(e)}>
      {filterInputs.map((item, index) => {
        return <Input key={index} {...item} />;
      })}
      <button className={styles.filter__button} type="submit">
        Filter
      </button>
      <button className={styles.filter__clear} type="reset">
        Clear
      </button>
    </form>
  );
}
