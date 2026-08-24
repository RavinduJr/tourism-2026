import Link from 'next/link';
import styles from '../service-pages.module.css';

export const metadata = { title: 'Vehicles | Serendib Roads', description: 'Comfortable private cars and vans for Sri Lanka travel.' };

const vehicles = [['Cars', 'Comfortable sedans and SUVs for couples, solo travellers, and small families.'], ['Vans', 'Generous seating and luggage space for families, friends, and small groups.']];

export default function VehiclesPage() { return <main className={styles.page}><nav className={styles.nav}><Link className={styles.brand} href="/">Serendib Roads</Link><Link className={styles.back} href="/">← Home</Link></nav><header className={styles.hero}><p className={styles.eyebrow}>Vehicles</p><h1>Comfort in every kilometre.</h1><p className={styles.intro}>Every vehicle is air-conditioned, well-maintained, and selected to make the road feel like part of your holiday.</p></header><section className={styles.content}><div className={styles.grid}>{vehicles.map(([title, text], i) => <article className={styles.card} key={title}><span className={styles.number}>0{i + 1}</span><h2>{title}</h2><p>{text}</p></article>)}</div><Link className={styles.cta} href="mailto:hello@serendibroads.com">Choose your vehicle ↗</Link></section><footer className={styles.footer}>Serendib Roads · Private Sri Lanka journeys</footer></main>; }
