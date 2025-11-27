import { useTranslations } from 'next-intl';
import styles from './TeamSection.module.css';

export default function TeamSection() {
  const t = useTranslations('Team');

  return (
    <section className={styles.container}>
      <div className="container">
        <h2>{t('title')}</h2>
        <div className={styles.grid}>
          {/* Placeholder team members */}
          <div className={styles.card}>
            <div className={styles.avatar}></div>
            <div className={styles.name}>John Doe</div>
            <div className={styles.role}>{t('role')}</div>
          </div>
          <div className={styles.card}>
            <div className={styles.avatar}></div>
            <div className={styles.name}>Jane Smith</div>
            <div className={styles.role}>{t('role')}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
