import { useTranslations } from 'next-intl';
import Image from 'next/image';
import styles from './FeaturesSection.module.css';

export default function FeaturesSection() {
  const t = useTranslations('Features');

  const steps = [
    {
      id: 1,
      title: t('feature1.title'),
      description: t('feature1.description'),
      image: '/images/step1.png',
    },
    {
      id: 2,
      title: t('feature2.title'),
      description: t('feature2.description'),
      image: '/images/step2.png',
    },
    {
      id: 3,
      title: t('feature3.title'),
      description: t('feature3.description'),
      image: '/images/step3.png',
    },
  ];

  return (
    <section id="features" className={styles.section}>
      <div className="container">
        <h2 className={styles.mainTitle}>{t('title')}</h2>
        
        <div className={styles.grid}>
          {steps.map((step) => (
            <div key={step.id} className={styles.card}>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>{step.title}</h3>
                <p className={styles.cardDescription}>{step.description}</p>
              </div>
              <div className={styles.imageWrapper}>
                <Image 
                  src={step.image} 
                  alt={step.title}
                  width={300}
                  height={500}
                  className={styles.screenshot}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
