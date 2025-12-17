import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import styles from './Footer.module.css';

export default function Footer() {
  const t = useTranslations('Navigation');
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p className={styles.copyright}>
          © 2025 Focus Fine. All rights reserved.
        </p>
        <div className={styles.links}>
          <Link href="/privacy-policy" className={styles.link}>
            {t('privacyPolicy')}
          </Link>
          <Link href="/terms-of-use" className={styles.link}>
            {t('termsOfUse')}
          </Link>
        </div>
      </div>
    </footer>
  );
}
