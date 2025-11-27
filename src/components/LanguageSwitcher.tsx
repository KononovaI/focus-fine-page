'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';
import { ChangeEvent, useTransition } from 'react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <div style={{ position: 'absolute', top: '1rem', right: '1rem', zIndex: 101 }}>
      <select
        defaultValue={locale}
        onChange={handleChange}
        disabled={isPending}
        style={{
          padding: '0.5rem 1rem',
          borderRadius: 'var(--radius)',
          background: 'var(--primary)',
          color: 'var(--border)',
          border: '3px solid var(--border)',
          fontWeight: '900',
          fontSize: '0.8rem',
          textTransform: 'uppercase',
          cursor: 'pointer'
        }}
      >
        <option value="en">English</option>
        <option value="lv">Latviešu</option>
      </select>
    </div>
  );
}
