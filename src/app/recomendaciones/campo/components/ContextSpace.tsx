// ContextSpace.tsx
import Image from 'next/image';
import styles from '../page.module.css';

const ContextSpace = () => (
  <div className={styles.contextSpace}>
    <Image src="/booksContext.svg" alt="Context Image" width={40} height={20} />
  </div>
);

export default ContextSpace;