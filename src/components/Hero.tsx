import { useTranslations } from 'next-intl';
import StoreBadge from './StoreBadge';
import styles from './Hero.module.css';

export default function Hero() {
  const t = useTranslations('Hero');

  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>{t('title')}</h1>
      <p className={styles.description}>{t('description')}</p>
      <div className={styles.ctaWrapper}>
        <StoreBadge platform="google-play" campaign="hero" />
      </div>
    </section>
  );
}
