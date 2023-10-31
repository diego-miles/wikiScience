// components/Paragraph.tsx
import styles from './Paragraph.module.css';

type Props = {
  text: string;
};

const Paragraph = ({ text }: Props) => {
  return (
    <p className={styles.paragraph}>
      {text}
    </p>
  );
};

export default Paragraph;
