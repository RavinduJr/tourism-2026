import Link from 'next/link';
import styles from '../../service-pages.module.css';

export const metadata = { title: 'Van With Driver Sri Lanka | Serendib Roads', description: 'Private van and driver services for groups in Sri Lanka.' };

export default function VanWithDriverPage() { return <main className={styles.page}><nav className={styles.nav}><Link className={styles.brand} href="/">Serendib Roads</Link><Link className={styles.back} href="/driver-services">← Driver services</Link></nav><header className={styles.hero}><p className={styles.eyebrow}>Van With Driver Sri Lanka</p><h1>More people. More room. More ease.</h1><p className={styles.intro}>Travel comfortably as a family or group, with enough space for everyone, every bag, and the stories you collect along the way.</p></header><section className={styles.content}><Link className={styles.cta} href="mailto:hello@serendibroads.com">Plan this service ↗</Link></section><footer className={styles.footer}>Serendib Roads · Private Sri Lanka journeys</footer></main>; }
