import styles from "./Loading.module.css";

function Loading() {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.panLoader}>
        <div className={styles.loader}></div>
        <div className={styles.panContainer}>
          <div className={styles.pan}></div>
          <div className={styles.handle}></div>
        </div>
        <div className={styles.shadow}></div>
      </div>
    </div>
  );
}

export default Loading;
