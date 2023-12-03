import styles from './Syllabus.module.css';

const Overlay = ({ isVisible, closeOverlay, children }) => isVisible ? (
  <div className={styles.overlayContainer}>
    <div className={styles.background} onClick={closeOverlay}></div>
    <figure>{children}</figure>
    <button onClick={closeOverlay} className={styles.closeButton}>Close</button>
  </div>
) : null;

export default Overlay;
