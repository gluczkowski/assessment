import styles from "./SummaryCard.module.css";
export default function SummaryCard({ percent, text }) {
  return (
    <div className={styles.wrapper}>
      <p className={styles.percent}>{percent}%</p>
      <span className={styles.text}>{text}</span>
    </div>
  );
}
