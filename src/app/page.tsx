'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

type TabId = 'drivers' | 'transfers' | 'vehicles' | 'tours' | 'reviews';
type Tab = { id: TabId; href: string; label: string; eyebrow: string; title: string; description: string; items: { title: string; note: string }[] };

const tabs: Tab[] = [
  { id: 'drivers', href: '/driver-services', label: 'Driver services', eyebrow: 'Travel your way', title: 'A trusted driver for every Sri Lanka road.', description: 'Choose a private, comfortable way to travel—planned around your pace, not a fixed timetable.', items: [{ title: 'Private Driver Sri Lanka', note: 'A personal local driver for your whole journey.' }, { title: 'Car With Driver Sri Lanka', note: 'Effortless day trips and city-to-city travel.' }, { title: 'Van With Driver Sri Lanka', note: 'Room to travel together, comfortably.' }, { title: 'Chauffeur Service Sri Lanka', note: 'Polished transport for business or leisure.' }] },
  { id: 'transfers', href: '/airport-transfers', label: 'Airport transfers', eyebrow: 'Arrive at ease', title: 'From the runway to your first great view.', description: 'Your driver meets you at Bandaranaike International Airport and takes you straight where you need to be.', items: [{ title: 'Airport → Colombo', note: 'Fast, simple arrival into the city.' }, { title: 'Airport → Kandy', note: 'A comfortable drive into hill-country culture.' }, { title: 'Airport → Ella', note: 'Begin your escape with a scenic onward journey.' }] },
  { id: 'vehicles', href: '/vehicles', label: 'Vehicles', eyebrow: 'Travel in comfort', title: 'The right amount of room for the road ahead.', description: 'Clean, air-conditioned vehicles selected for a calm and comfortable trip across the island.', items: [{ title: 'Cars', note: 'Ideal for couples, small families, and focused itineraries.' }, { title: 'Vans', note: 'Spacious travel for families, friends, and plenty of luggage.' }] },
  { id: 'tours', href: '/tours', label: 'Tours', eyebrow: 'See the island deeply', title: 'Sri Lanka, beautifully paced.', description: 'Thoughtfully designed routes that join ancient cities, wild coasts, tea country, and unforgettable stays.', items: [{ title: '7-Day Sri Lanka Tour', note: 'A vivid first taste of the island’s highlights.' }, { title: '10-Day Sri Lanka Tour', note: 'More time for wildlife, coastlines, and slow mornings.' }, { title: '14-Day Sri Lanka Tour', note: 'An unhurried journey across every side of Sri Lanka.' }] },
  { id: 'reviews', href: '/reviews', label: 'Reviews', eyebrow: 'Travelled & trusted', title: 'Stories worth carrying home.', description: 'Guests remember the places, but often it is the easy moments in between that make a trip exceptional.', items: [{ title: '“Like travelling with a friend.”', note: 'Our itinerary was flexible, warm, and completely stress-free.' }, { title: '“Every detail felt considered.”', note: 'From the airport welcome to our final drop-off, everything was seamless.' }, { title: '“The best way to see Sri Lanka.”', note: 'Local insight transformed every day of our trip.' }] },
];

export default function Home() {
  const [activeId, setActiveId] = useState<TabId>('drivers');
  const activeTab = tabs.find((tab) => tab.id === activeId) ?? tabs[0];

  return <main className={styles.page}>
    <nav className={styles.nav} aria-label="Primary navigation">
      <a className={styles.brand} href="#top" aria-label="Serendib Roads home"><span className={styles.mark}>S</span><span>Serendib<br />Roads</span></a>
      <div className={styles.navLinks}>
        <div className={styles.driverMenu}>
          <Link href="/driver-services">Driver services <span>⌄</span></Link>
          <div className={styles.driverDropdown}>
            <Link href="/driver-services/private-driver-service">Private Driver Sri Lanka</Link>
            <Link href="/driver-services/car-with-driver-service">Car With Driver Sri Lanka</Link>
            <Link href="/driver-services/van-driver-service">Van With Driver Sri Lanka</Link>
            <Link href="/driver-services/chauffer-service">Chauffeur Service Sri Lanka</Link>
          </div>
        </div>
        <Link href="/airport-transfers">Airport transfers</Link><Link href="/vehicles">Vehicles</Link><Link href="/tours">Tours</Link><Link href="/reviews">Reviews</Link>
      </div>
      <a className={styles.navCta} href="#contact">Plan your trip <span>↗</span></a>
    </nav>
    <section className={styles.hero} id="top">
      <div className={styles.heroCopy}><p className={styles.kicker}>Private journeys through Sri Lanka</p><h1>Make room for<br /><em>the unexpected.</em></h1><p className={styles.intro}>Private drivers, airport transfers, and tailor-made tours for the Sri Lanka you came to find.</p></div>
      <div className={styles.heroScene} aria-hidden="true"><div className={styles.sun} /><div className={styles.mountainOne} /><div className={styles.mountainTwo} /><div className={styles.road} /><span className={styles.sceneLabel}>ISLAND ROUTES<br />MADE PERSONAL</span></div>
    </section>
    <section className={styles.experience} id="experience" aria-labelledby="services-heading">
      <div className={styles.sectionTopline}><p>Explore with us</p><span>01 — 05</span></div>
      <div className={styles.tabs} role="tablist" aria-label="Travel services">{tabs.map((tab, index) => <button className={`${styles.tab} ${activeId === tab.id ? styles.activeTab : ''}`} key={tab.id} onClick={() => setActiveId(tab.id)} role="tab" aria-selected={activeId === tab.id} aria-controls={`${tab.id}-panel`} id={`${tab.id}-tab`}><span>0{index + 1}</span>{tab.label}</button>)}</div>
      <div className={styles.tabPanel} role="tabpanel" id={`${activeTab.id}-panel`} aria-labelledby={`${activeTab.id}-tab`}>
        <div className={styles.panelIntro}><p className={styles.kicker}>{activeTab.eyebrow}</p><h2 id="services-heading">{activeTab.title}</h2><p>{activeTab.description}</p><Link className={styles.textLink} href={activeTab.href}>Explore {activeTab.label} <span>→</span></Link></div>
        <div className={styles.serviceGrid}>{activeTab.items.map((item, index) => <Link className={styles.serviceCard} href={activeTab.href} key={item.title}><span className={styles.cardNo}>0{index + 1}</span><div><h3>{item.title}</h3><p>{item.note}</p></div><span className={styles.arrow}>↗</span></Link>)}</div>
      </div>
    </section>
    <section className={styles.statement} id="journal"><p>Not just a way to get there.</p><h2>The road is part<br />of the <em>story.</em></h2><a className={styles.lightCta} href="#contact">Start planning <span>↗</span></a></section>
    <footer className={styles.footer} id="contact"><span>© 2026 Serendib Roads</span><span>Sri Lanka · Made for wandering</span><a href="mailto:hello@serendibroads.com">hello@serendibroads.com</a></footer>
  </main>;
}
