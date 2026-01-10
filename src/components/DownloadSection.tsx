import { useTranslations } from 'next-intl';
import styles from './DownloadSection.module.css';

export default function DownloadSection() {
  const t = useTranslations('Download');

  return (
    <section id="download" className={styles.container}>
      <div className="container">
        <h2>{t('title')}</h2>
        <div className={styles.buttonGroup}>
          <a 
            href="https://play.google.com/store/apps/details?id=com.focusfine.focusfine&pcampaignid=web_share"
            target="_blank"
            rel="noopener noreferrer"
            className={`btn ${styles.androidBtn}`}
          >
            {t('android')}
          </a>
        </div>
      </div>
    </section>
  );
}
