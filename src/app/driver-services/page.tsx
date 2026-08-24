import Link from 'next/link';
import styles from '../service-pages.module.css';

const services = [
  ['Private Driver Sri Lanka', 'Your own experienced local driver for flexible, multi-day travel across the island.'],
  ['Car With Driver Sri Lanka', 'Comfortable private transport for city journeys, day trips, and custom itineraries.'],
  ['Van With Driver Sri Lanka', 'Spacious and easy group travel for families, friends, and luggage-heavy adventures.'],
  ['Chauffeur Service Sri Lanka', 'Professional, discreet service for business travel, special occasions, and premium journeys.'],
];

export const metadata = { title: 'Driver Services | Serendib Roads', description: 'Private drivers and chauffeur services in Sri Lanka.' };

export default function DriverServicesPage() { return <main className={styles.page}><nav className={styles.nav}><Link className={styles.brand} href="/">Serendib Roads</Link><Link className={styles.back} href="/">← Home</Link></nav><header className={styles.hero}><p className={styles.eyebrow}>Driver services</p><h1>Travel freely. Leave the driving to us.</h1><p className={styles.intro}>From the first pickup to the last viewpoint, a private Sri Lankan driver keeps your journey relaxed, safe, and entirely your own.</p></header><section className={styles.content}><div className={styles.grid}>{services.map(([title, text], i) => <article className={styles.card} key={title}><span className={styles.number}>0{i + 1}</span><h2>{title}</h2><p>{text}</p></article>)}</div><Link className={styles.cta} href="mailto:hello@serendibroads.com">Ask about a driver ↗</Link></section><footer className={styles.footer}>Serendib Roads · Private Sri Lanka journeys</footer></main>; }
