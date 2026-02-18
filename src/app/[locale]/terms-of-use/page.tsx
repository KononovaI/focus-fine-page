import { useTranslations } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './page.module.css';

export default function TermsOfUse() {
  const t = useTranslations('TermsOfUse');

  const renderList = (key: string) => {
    try {
      const items = t.raw(key) as string[];
      if (Array.isArray(items)) {
        return (
          <ul className={styles.list}>
            {items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        );
      }
    } catch (e) {
      return null;
    }
    return null;
  };

  return (
    <main className={styles.main}>
      <Header />
      <div className={`container ${styles.contentWrapper}`}>
        <div className="content-box">
          <h1 className={styles.title}>{t('title')}</h1>
          <p className={styles.effectiveDate}>{t('effectiveDate')}</p>
          <p className={styles.intro}>{t('intro')}</p>

          <div>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>{t('sections.1.title')}</h2>
              <p className="whitespace-pre-line">{t('sections.1.content')}</p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>{t('sections.2.title')}</h2>
              {renderList('sections.2.items')}
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>{t('sections.3.title')}</h2>
              <p className="whitespace-pre-line">{t('sections.3.content')}</p>
              {renderList('sections.3.items')}
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>{t('sections.4.title')}</h2>
              <p className="whitespace-pre-line">{t('sections.4.content')}</p>
              {renderList('sections.4.items')}
              <p className={styles.footerNote}>{t('sections.4.footer')}</p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>{t('sections.5.title')}</h2>
              {renderList('sections.5.items')}
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>{t('sections.6.title')}</h2>
              {renderList('sections.6.items')}
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>{t('sections.7.title')}</h2>
              <p className="whitespace-pre-line">{t('sections.7.content')}</p>
              {renderList('sections.7.items')}
              <p className={styles.footerNote}>{t('sections.7.footer')}</p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>{t('sections.8.title')}</h2>
              {renderList('sections.8.items')}
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>{t('sections.9.title')}</h2>
              <p className="whitespace-pre-line">{t('sections.9.content')}</p>
              {renderList('sections.9.items')}
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>{t('sections.10.title')}</h2>
              <p className="whitespace-pre-line">{t('sections.10.content')}</p>
              {renderList('sections.10.items')}
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>{t('sections.11.title')}</h2>
              {renderList('sections.11.items')}
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>{t('sections.12.title')}</h2>
              <p className="whitespace-pre-line">{t('sections.12.content')}</p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>{t('sections.13.title')}</h2>
              {renderList('sections.13.items')}
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>{t('sections.14.title')}</h2>
              <p className="whitespace-pre-line">{t('sections.14.content')}</p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
