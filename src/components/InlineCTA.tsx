'use client';

import { useTranslations } from 'next-intl';
import StoreBadge from './StoreBadge';
import styles from './InlineCTA.module.css';

export default function InlineCTA() {
  const t = useTranslations('Download');
  
  return (
    <div className={styles.container}>
      <p className={styles.text}>{t('android')}</p>
      <StoreBadge platform="google-play" campaign="inline_cta" />
    </div>
  );
}
