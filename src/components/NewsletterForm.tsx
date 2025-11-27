'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { supabase } from '@/lib/supabase';
import styles from './NewsletterForm.module.css';

export default function NewsletterForm() {
  const t = useTranslations('Newsletter');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    const { error } = await supabase
      .from('newsletter_subscribers')
      .insert([{ email }]);

    if (error) {
      console.error(error);
      setStatus('error');
    } else {
      setStatus('success');
      setEmail('');
    }
  };

  return (
    <section className={styles.container}>
      <div className="container">
        <h2>{t('title')}</h2>
        <p>{t('description')}</p>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder={t('placeholder')}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={styles.input}
            disabled={status === 'loading'}
          />
          <button type="submit" className="btn btn-primary" disabled={status === 'loading'}>
            {status === 'loading' ? '...' : t('button')}
          </button>
        </form>
        {status === 'success' && <p className={`${styles.message} ${styles.success}`}>{t('success')}</p>}
        {status === 'error' && <p className={`${styles.message} ${styles.error}`}>{t('error')}</p>}
      </div>
    </section>
  );
}
