'use client';

import StoreBadge from './StoreBadge';
import styles from './StickyMobileCTA.module.css';

export default function StickyMobileCTA() {
  return (
    <div className={styles.stickyBar}>
      <StoreBadge platform="google-play" campaign="sticky_mobile_cta" className={styles.badge} />
    </div>
  );
}
