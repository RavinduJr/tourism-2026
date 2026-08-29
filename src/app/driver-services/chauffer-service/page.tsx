import Link from 'next/link';
import styles from '../../service-pages.module.css';

export const metadata = { title: 'Chauffeur Service Sri Lanka | Serendib Roads', description: 'Professional chauffeur services in Sri Lanka.' };

export default function ChauffeurServicePage() { return <main className={styles.page}><nav className={styles.nav}><Link className={styles.brand} href="/">Serendib Roads</Link><Link className={styles.back} href="/driver-services">← Driver services</Link></nav><header className={styles.hero}><p className={styles.eyebrow}>Chauffeur Service Sri Lanka</p><h1>A considered way to move.</h1><p className={styles.intro}>Professional, discreet chauffeur service for business travel, special occasions, and guests who value every detail.</p></header><section className={styles.content}><Link className={styles.cta} href="mailto:hello@serendibroads.com">Plan this service ↗</Link></section><footer className={styles.footer}>Serendib Roads · Private Sri Lanka journeys</footer></main>; }
