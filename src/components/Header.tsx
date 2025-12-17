'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { usePathname, Link } from '@/i18n/routing';
import LanguageSwitcher from './LanguageSwitcher';
import styles from './Header.module.css';

export default function Header() {
  const t = useTranslations('Navigation');
  const pathname = usePathname();
  const isLandingPage = pathname === '/';

  return (
    <header className={styles.header}>
      <Link href="/">
        <Image
          src="https://amncyapgihtaziuabbkd.supabase.co/storage/v1/object/public/images/focus-fine-logo.png"
          alt="Focus Fine Logo"
          width={80}
          height={80}
          className={styles.logo}
          priority
        />
      </Link>
      
      <nav className={styles.nav}>
        {isLandingPage ? (
          <>
            <a href="#video" className={styles.navLink}>{t('video')}</a>
            <a href="#download" className={styles.navLink}>{t('download')}</a>
            <a href="#newsletter" className={styles.navLink}>{t('newsletter')}</a>
            <a href="#contact" className={styles.navLink}>{t('contact')}</a>
          </>
        ) : (
          <Link href="/" className={styles.navLink}>{t('home')}</Link>
        )}
      </nav>

      <LanguageSwitcher />
    </header>
  );
}
