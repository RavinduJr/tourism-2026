import Link from 'next/link';
import { notFound } from 'next/navigation';
import styles from '../../service-pages.module.css';

const services = {
  'private-driver': { eyebrow: 'Private Driver Sri Lanka', title: 'Your journey, your pace.', text: 'Enjoy the freedom of Sri Lanka with a dedicated local driver who knows the roads, the hidden stops, and the moments worth slowing down for.' },
  'car-with-driver': { eyebrow: 'Car With Driver Sri Lanka', title: 'Comfortable travel, made simple.', text: 'A private car and knowledgeable driver for airport arrivals, day trips, and city-to-city journeys with none of the usual travel friction.' },
  'van-with-driver': { eyebrow: 'Van With Driver Sri Lanka', title: 'More people. More room. More ease.', text: 'Travel comfortably as a family or group, with enough space for everyone, every bag, and the stories you collect along the way.' },
  'chauffeur-service': { eyebrow: 'Chauffeur Service Sri Lanka', title: 'A considered way to move.', text: 'Professional and discreet chauffeur service for business travel, special occasions, and guests who value every detail.' },
} as const;

type ServiceSlug = keyof typeof services;

export function generateStaticParams() { return Object.keys(services).map((service) => ({ service })); }

export default async function ServicePage({ params }: PageProps<'/driver-services/[service]'>) {
  const { service } = await params;
  if (!(service in services)) notFound();
  const detail = services[service as ServiceSlug];
  return <main className={styles.page}><nav className={styles.nav}><Link className={styles.brand} href="/">Serendib Roads</Link><Link className={styles.back} href="/driver-services">← Driver services</Link></nav><header className={styles.hero}><p className={styles.eyebrow}>{detail.eyebrow}</p><h1>{detail.title}</h1><p className={styles.intro}>{detail.text}</p></header><section className={styles.content}><Link className={styles.cta} href="mailto:hello@serendibroads.com">Plan this service ↗</Link></section><footer className={styles.footer}>Serendib Roads · Private Sri Lanka journeys</footer></main>;
}
