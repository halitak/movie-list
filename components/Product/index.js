import Image from "next/image";
import styles from "./index.module.css";

export default function Product({ product }) {
  return (
    <div className={styles.product}>
      <div className={styles.product__image}>
        <Image
          src={product.Poster}
          alt={product.Title}
          width={300}
          height={450}
        />
      </div>
      <div className={styles.product__info}>
        <div className={styles.product__title}>{product.Title}</div>
        <div className={styles.product__year}>{product.Year}</div>
        <div className={styles.product__type}>{product.Type}</div>
      </div>
    </div>
  );
}
