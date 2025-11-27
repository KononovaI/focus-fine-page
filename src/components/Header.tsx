import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Image
        src="https://amncyapgihtaziuabbkd.supabase.co/storage/v1/object/public/images/focus-fine-logo.png"
        alt="Focus Fine Logo"
        width={120}
        height={120}
        className={styles.logo}
        priority
      />
    </header>
  );
}
