// components/ContextSpace.tsx
import Image from 'next/image';
import styles from './ContextSpace.module.css';

type Props = {
  svg: string;
};

const ContextSpace: React.FC<Props> = ({ svg }) => {
  return (
    <div className={styles.contextSpace}>
      <Image
        src={svg}
        alt="context space"
        width={40}
        height={20}
        layout="fixed"
      />
    </div>
  );
};

export default ContextSpace;
