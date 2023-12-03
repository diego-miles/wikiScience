import styles from './Syllabus.module.css';

const SyllabusButton = ({ onClick }) => (
  <button onClick={onClick} className={styles.centerButton}>View Syllabus</button>
);

export default SyllabusButton;
