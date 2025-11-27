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
            href="https://amncyapgihtaziuabbkd.supabase.co/storage/v1/object/public/files/User_journey_v02-2025-11-26-162438.mmd" 
            download="User_journey_v02.mmd"
            className={`btn ${styles.androidBtn}`}
          >
            {t('android')}
          </a>
        </div>
      </div>
    </section>
  );
}
