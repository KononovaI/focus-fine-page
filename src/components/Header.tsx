import Image from 'next/image';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';
import styles from './Header.module.css';

export default function Header() {
  const t = useTranslations('Navigation');

  return (
    <header className={styles.header}>
      <Image
        src="https://amncyapgihtaziuabbkd.supabase.co/storage/v1/object/public/images/focus-fine-logo.png"
        alt="Focus Fine Logo"
        width={80}
        height={80}
        className={styles.logo}
        priority
      />
      
      <nav className={styles.nav}>
        <a href="#video" className={styles.navLink}>{t('video')}</a>
        <a href="#download" className={styles.navLink}>{t('download')}</a>
        <a href="#newsletter" className={styles.navLink}>{t('newsletter')}</a>
        <a href="#contact" className={styles.navLink}>{t('contact')}</a>
      </nav>

      <LanguageSwitcher />
    </header>
  );
}
