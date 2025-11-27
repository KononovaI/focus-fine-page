import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p className={styles.copyright}>
          © 2025 Focus Fine. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
