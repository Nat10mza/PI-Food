import styles from "./Loading.module.css";

function Loading() {
  return (
    <div class={styles.loadingContainer}>
      <div class={styles.panLoader}>
        <div class={styles.loader}></div>
        <div class={styles.panContainer}>
          <div class={styles.pan}></div>
          <div class={styles.handle}></div>
        </div>
        <div class={styles.shadow}></div>
      </div>
    </div>
  );
}

export default Loading;
