import Link from 'next/link';
import styles from '../../service-pages.module.css';

export const metadata = { title: 'Car With Driver Sri Lanka | Serendib Roads', description: 'Private car and driver services across Sri Lanka.' };

export default function CarWithDriverPage() { return <main className={styles.page}><nav className={styles.nav}><Link className={styles.brand} href="/">Serendib Roads</Link><Link className={styles.back} href="/driver-services">← Driver services</Link></nav><header className={styles.hero}><p className={styles.eyebrow}>Car With Driver Sri Lanka</p><h1>Comfortable travel, made simple.</h1><p className={styles.intro}>A private car and skilled local driver for airport arrivals, day trips, and city-to-city journeys without the usual travel friction.</p></header><section className={styles.content}><Link className={styles.cta} href="mailto:hello@serendibroads.com">Plan this service ↗</Link></section><footer className={styles.footer}>Serendib Roads · Private Sri Lanka journeys</footer></main>; }
