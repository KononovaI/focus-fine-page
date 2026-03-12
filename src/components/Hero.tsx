import { useTranslations } from 'next-intl';
import Image from 'next/image';
import StoreBadge from './StoreBadge';
import styles from './Hero.module.css';

export default function Hero() {
  const t = useTranslations('Hero');

  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>{t('title')}</h1>
      <p className={styles.description}>{t('description')}</p>
      <div className={styles.ctaWrapper}>
        <div className={styles.badgeContainer}>
          <StoreBadge platform="google-play" campaign="hero" />
        </div>
        <div className={styles.qrContainer}>
          <Image 
            src="/images/google-play-qr.png" 
            alt="Google Play QR Code" 
            width={175} 
            height={175}
            className={styles.qrCode}
          />
        </div>
      </div>
    </section>
  );
}
