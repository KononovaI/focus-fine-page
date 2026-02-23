import Image from 'next/image';
import styles from './StoreBadge.module.css';

interface StoreBadgeProps {
  platform: 'google-play' | 'app-store';
  campaign?: string;
  className?: string;
}

export default function StoreBadge({ platform, campaign = 'website', className = '' }: StoreBadgeProps) {
  const isGooglePlay = platform === 'google-play';
  
  // Base URLs
  const googlePlayUrl = `https://play.google.com/store/apps/details?id=com.focusfine.focusfine&utm_source=landing_page&utm_medium=web&utm_campaign=${campaign}`;
  const appStoreUrl = '#'; // Coming soon

  const href = isGooglePlay ? googlePlayUrl : appStoreUrl;
  const badgeSrc = isGooglePlay ? '/badges/GetItOnGooglePlay_Badge_Web_color_English.png' : '/badges/app-store-coming-soon.png';
  const altText = isGooglePlay ? 'Get it on Google Play' : 'Coming Soon on the App Store';

  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.badge} ${className} ${!isGooglePlay ? styles.disabled : ''}`}
      aria-label={altText}
    >
      <Image 
        src={badgeSrc} 
        alt={altText}
        width={200}
        height={60}
        className={styles.image}
      />
    </a>
  );
}
