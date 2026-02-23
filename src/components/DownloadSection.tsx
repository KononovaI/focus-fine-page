import { useTranslations } from 'next-intl';
import StoreBadge from './StoreBadge';
import styles from './DownloadSection.module.css';

export default function DownloadSection() {
  const t = useTranslations('Download');

  return (
    <section id="download" className={styles.container}>
      <div className="container">
        <h2>{t('title')}</h2>
        <div className={styles.badgesWrapper}>
          <StoreBadge platform="google-play" campaign="download_section" />
          <StoreBadge platform="app-store" />
        </div>
      </div>
    </section>
  );
}
