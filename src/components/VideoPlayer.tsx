import { useTranslations } from 'next-intl';
import styles from './VideoPlayer.module.css';

export default function VideoPlayer() {
  const t = useTranslations('Video');
  const videoId = 'FHa-cnjITOU'; // Extracted from URL

  return (
    <section className={`container ${styles.container}`}>
      <h2>{t('title')}</h2>
      <div className={styles.wrapper}>
        <iframe
          className={styles.iframe}
          src={`https://www.youtube.com/embed/${videoId}`}
          title="Product Demo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}
