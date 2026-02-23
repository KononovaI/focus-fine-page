'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import styles from './VideoPlayer.module.css';

export default function VideoPlayer() {
  const t = useTranslations('Video');
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = 'gkF_YlF3NEk'; // YouTube Shorts ID
  
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <section id="video" className={`container ${styles.container}`}>
      <h2>{t('title')}</h2>
      <div className={styles.wrapper}>
        {!isPlaying ? (
          <div className={styles.thumbnailWrapper} onClick={() => setIsPlaying(true)}>
            <Image 
              src={thumbnailUrl} 
              alt="Video thumbnail"
              fill
              className={styles.thumbnail}
            />
            <div className={styles.playButton}>
              <div className={styles.playIcon} />
            </div>
          </div>
        ) : (
          <iframe
            className={styles.iframe}
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="Product Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </section>
  );
}
