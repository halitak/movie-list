import Link from "next/link";
import styles from "./index.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <nav>
        <Link href="/">
          <a className={styles.header__link}>Home</a>
        </Link>
      </nav>
    </div>
  );
}
