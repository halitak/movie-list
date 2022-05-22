import styles from "./index.module.css";

export default function Input({ children, ...props }) {
  const { name, placeholder, type, options } = props;
  return type === "text" ? (
    <input {...props} className={styles.input} />
  ) : type === "select" ? (
    <select {...props} className={styles.input}>
      <option value="">Choose type</option>
      {options.map((item, index) => {
        return (
          <option key={index} value={item}>
            {item}
          </option>
        );
      })}
    </select>
  ) : (
    ""
  );
}
