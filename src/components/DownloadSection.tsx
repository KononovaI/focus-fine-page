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
            href="https://amncyapgihtaziuabbkd.supabase.co/storage/v1/object/public/files/focus-fine-app-v8a-release.apk" 
            download="focus-fine-app-v8a-release.apk"
            className={`btn ${styles.androidBtn}`}
          >
            {t('android')}
          </a>
        </div>
      </div>
    </section>
  );
}
