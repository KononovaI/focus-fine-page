'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { supabase } from '@/lib/supabase';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const t = useTranslations('Contact');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    const { error } = await supabase
      .from('contact_messages')
      .insert([formData]);

    if (error) {
      console.error(error);
      setStatus('error');
    } else {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <section id="contact" className={styles.container}>
      <div className="container">
        <h2>{t('title')}</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder={t('name')}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            disabled={status === 'loading'}
          />
          <input
            type="email"
            placeholder={t('email')}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            disabled={status === 'loading'}
          />
          <textarea
            placeholder={t('message')}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
            rows={5}
            disabled={status === 'loading'}
          ></textarea>
          <button type="submit" className={`btn btn-primary ${styles.submitBtn}`} disabled={status === 'loading'}>
            {status === 'loading' ? '...' : t('button')}
          </button>
        </form>
        {status === 'success' && <p className={`${styles.message} ${styles.success}`}>{t('success')}</p>}
        {status === 'error' && <p className={`${styles.message} ${styles.error}`}>{t('error')}</p>}
      </div>
    </section>
  );
}
