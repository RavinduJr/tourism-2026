import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './private-driver-service.module.css';

export const metadata: Metadata = {
  title: 'Private Driver in Sri Lanka | Serendib Roads',
  description: 'Explore Sri Lanka comfortably and at your own pace with a professional private driver, vehicle, and flexible itinerary.',
};

const benefits = [
  ['Travel at your own pace', 'Start when it suits you, pause for photographs, linger over lunch, or add a memorable stop along the way. Your holiday is not a timetable.'],
  ['Door-to-door travel', 'Be collected from your hotel, villa, resort, airport, or agreed pickup point, then travel directly to your next destination with luggage kept together.'],
  ['Local road experience', 'An experienced Sri Lankan driver understands realistic travel times, local roads, useful routes, and worthwhile stopping points.'],
  ['Made for island journeys', 'One dedicated driver and vehicle can travel with you through a multi-day route while you enjoy the hotels and places you have chosen.'],
];

const destinations = [
  ['Sigiriya & Cultural Triangle', 'Explore Sigiriya, Dambulla, Polonnaruwa and Anuradhapura without arranging new transport for every journey.'],
  ['Kandy', 'Continue easily from the hill-country city towards Nuwara Eliya, Ella, Sigiriya or Colombo.'],
  ['Nuwara Eliya', 'Take in tea country, winding mountain roads and scenic viewpoints with ease.'],
  ['Ella', 'Combine Ella with Nuwara Eliya, Kandy, Yala and the southern coast on one flowing route.'],
  ['Yala National Park', 'Travel to the Yala or Tissamaharama area, ready for your safari arrangements to begin.'],
  ['Mirissa & Galle', 'Follow the coast through Weligama, Unawatuna and Galle before returning to Colombo, Negombo or the airport.'],
];

const faqs = [
  ['Is it worth hiring a private driver in Sri Lanka?', 'It can be especially worthwhile when your holiday covers several destinations: you have easy hotel-to-hotel transport and more flexibility than relying only on fixed public transport schedules.'],
  ['Can I hire a driver for my whole holiday?', 'Yes. Drivers can be arranged for multi-day journeys including 7-day, 10-day, 14-day and longer itineraries, subject to availability.'],
  ['Can I book a private driver for one day?', 'Yes. Depending on availability and your journey, the service can also suit day trips and shorter travel requirements.'],
  ['Does the driver speak English?', 'English-speaking drivers can be arranged for international travellers. Let us know if you need another language or specific assistance.'],
  ['Can I be picked up from Colombo Airport?', 'Yes. Pickup from Bandaranaike International Airport (CMB) can be included in your private driver booking.'],
  ['Can we change our itinerary during the trip?', 'Minor changes can often be accommodated. Larger changes to route or distance may affect the original quote, so discuss them beforehand.'],
  ['Is a vehicle included?', 'Yes. The service includes an appropriate private vehicle for the agreed journey. Cars suit couples and smaller groups; vans can be better for families and more luggage.'],
  ['Are fuel and driver accommodation included?', 'This depends on the quote and service arrangement. Your personalised quotation will clearly explain inclusions and any additional costs.'],
];

function BulletList({ items }: { items: string[] }) {
  return <ul className={styles.list}>{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}

export default function PrivateDriverPage() {
  return <main className={styles.page}>
    <nav className={styles.nav} aria-label="Primary navigation">
      <Link className={styles.brand} href="/"><span className={styles.mark}>S</span><span>Serendib<br />Roads</span></Link>
      <div className={styles.navLinks}><Link href="/driver-services">Driver services</Link><Link href="/airport-transfers">Airport transfers</Link><Link href="/vehicles">Vehicles</Link><Link href="/tours">Tours</Link></div>
      <a className={styles.navCta} href="#quote">Plan your trip <span>↗</span></a>
    </nav>

    <header className={styles.hero}>
      <div className={styles.heroCopy}>
        <p className={styles.eyebrow}>Private driver · Sri Lanka</p>
        <h1>See more. <em>Worry less.</em></h1>
        <p className={styles.heroText}>Explore Sri Lanka comfortably, safely, and entirely at your own pace with a professional private driver and vehicle arranged around your journey.</p>
        <div className={styles.heroActions}><a className={styles.darkCta} href="#quote">Request a personal quote <span>↗</span></a><a className={styles.plainLink} href="#how-it-works">How it works <span>↓</span></a></div>
      </div>
      <div className={styles.heroArt} aria-hidden="true"><div className={styles.sun} /><div className={styles.mountain} /><div className={styles.road} /><span className={styles.heroCaption}>YOUR ISLAND<br />YOUR PACE</span></div>
    </header>

    <section className={styles.trustBar} aria-label="Private driver highlights">
      {['Your route, your rhythm', 'English-speaking options', 'Airport to island-wide travel'].map((text, index) => <div className={styles.trustItem} key={text}><span className={styles.trustNo}>0{index + 1}</span><p>{text}</p></div>)}
    </section>

    <section className={styles.section}>
      <div className={styles.sectionTop}><p className={styles.sectionLabel}>A simpler way to travel</p><span className={styles.sectionCount}>01 — 06</span></div>
      <div className={styles.introGrid}><h2 className={styles.sectionTitle}>The island is small.<br />The journey is not.</h2><div className={styles.introCopy}><p>Whether you are planning a short holiday, a two-week journey around the island, an airport pickup, or a fully customised itinerary, a private driver gives you the freedom to travel without navigating unfamiliar roads, parking, or public transport connections.</p><p>Travel between cities, beaches, cultural attractions, national parks, tea country, and hotels with a dedicated driver and private vehicle shaped around your plans.</p></div></div>
      <div className={styles.route}><p className={styles.routeKicker}>A classic island loop</p><h3 className={styles.routeTitle}>From ancient cities to the south coast, joined by one easy road.</h3><div className={styles.routePath}><span>Colombo / Negombo</span> → <span>Sigiriya</span> → <span>Kandy</span> → <span>Nuwara Eliya</span> → <span>Ella</span> → <span>Yala</span> → <span>Mirissa</span> → <span>Galle</span> → <span>Colombo</span></div></div>
    </section>

    <section className={`${styles.section} ${styles.benefits}`}>
      <div className={styles.sectionTop}><p className={styles.sectionLabel}>Why travel with a private driver?</p><span className={styles.sectionCount}>02 — 06</span></div>
      <div className={styles.benefitGrid}>{benefits.map(([title, text], index) => <article className={styles.benefit} key={title}><span className={styles.benefitNo}>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>

    <section className={`${styles.section} ${styles.destinations}`}>
      <div className={styles.sectionTop}><p className={styles.sectionLabel}>Go wherever curiosity takes you</p><span className={styles.sectionCount}>03 — 06</span></div>
      <div className={styles.introGrid}><h2 className={styles.sectionTitle}>From temples<br />to tea country.</h2><div className={styles.introCopy}><p>A private driver can be arranged throughout Sri Lanka’s most-loved destinations. Your itinerary remains yours; the connection between each remarkable place becomes refreshingly straightforward.</p><p>Start with an airport pickup from Bandaranaike International Airport (CMB), then continue directly to Negombo, Colombo, Sigiriya, Dambulla, Kandy, Galle, Bentota, Hikkaduwa, Mirissa or beyond.</p></div></div>
      <div className={styles.destinationGrid}>{destinations.map(([title, text], index) => <article className={styles.destination} key={title}><span className={styles.destinationNo}>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>

    <section className={styles.section}>
      <div className={styles.splitSection}><div><p className={styles.sectionLabel}>The details, made clear</p><h2 className={styles.stickyTitle}>Designed around your holiday.</h2></div><div className={styles.detailStack}>
        <article className={styles.detail}><h3>Easy communication, wherever you are from</h3><p>English-speaking private drivers are ideal for international visitors who want to communicate comfortably about pickup times, destinations, stops, hotels, and daily travel arrangements. Ask about other languages or assistance when requesting your quote.</p></article>
        <article className={styles.detail}><h3>Private round tours that fit your timeframe</h3><p>Give us a complete itinerary, or simply name the places you would like to visit. We can help shape the right private transport arrangement for your journey.</p><BulletList items={['3–5 day short tours', '7-day Sri Lanka holidays', '10-day round tours', '14-day itineraries and longer stays', 'Honeymoons, couples, families and small groups']} /></article>
        <article className={styles.detail}><h3>What your quote may include</h3><p>Exact inclusions depend on your itinerary and are always confirmed before booking.</p><BulletList items={['Private driver and air-conditioned vehicle', 'Fuel for the agreed itinerary', 'Driver expenses and multi-day accommodation', 'Airport pickup or drop-off', 'Agreed kilometre allowance', 'Specified parking and highway charges']} /><p className={styles.note}>We recommend confirming all inclusions before the trip so you know exactly what your booking covers.</p></article>
        <article className={styles.detail}><h3>A price based on your actual plans</h3><p>The cost of a private driver depends on your travel days, distance, pickup and drop-off points, vehicle type, passengers, luggage, travel season, route, airport transfers, and other requirements.</p><p className={styles.note}>Send your travel dates, number of travellers, destinations, and luggage requirements for an accurate personal quotation.</p></article>
      </div></div>
    </section>

    <section className={`${styles.section} ${styles.audiences}`}><div className={styles.audienceGrid}>
      <article className={styles.audience}><h3>For couples</h3><p>Keep your own hotels, restaurants, attractions, and daily schedule while transportation between destinations is already arranged. A comfortable car is often ideal for standard luggage.</p></article>
      <article className={styles.audience}><h3>For families</h3><p>Keep luggage together, travel straight between accommodation, and plan suitable stops along the way. Let us know about child seats, extra space, or other family needs.</p></article>
      <article className={styles.audience}><h3>For solo travellers</h3><p>Arrange convenient door-to-door transport in advance and spend more time enjoying the places you came to see, with less daily planning on the road.</p></article>
    </div></section>

    <section className={`${styles.section} ${styles.comparison}`}>
      <div className={styles.sectionTop}><p className={styles.sectionLabel}>Choose the journey that suits you</p><span className={styles.sectionCount}>04 — 06</span></div>
      <div className={styles.compareGrid}>
        <article className={styles.compareCard}><h3>Private driver vs. taxi</h3><p>Taxis are excellent for short, individual trips. A private driver comes into its own when your holiday involves multiple destinations over several days.</p><BulletList items={['Taxi: short city journeys, one-way transfers, occasional trips', 'Private driver: multi-day holidays, hotel-to-hotel touring, families with luggage, flexible routes']} /></article>
        <article className={styles.compareCard}><h3>Private driver vs. public transport</h3><p>Buses and trains can be a memorable part of Sri Lanka. A private driver can better suit a tighter multi-destination itinerary or longer travel days.</p><BulletList items={['Public transport: light luggage, flexible schedules, lower-cost independent travel', 'Private driver: direct transfers, flexible departures, family ease, several destinations']} /></article>
      </div>
    </section>

    <section className={`${styles.section} ${styles.steps}`} id="how-it-works">
      <div className={styles.sectionTop}><p className={styles.sectionLabel}>How to hire your driver</p><span className={styles.sectionCount}>05 — 06</span></div>
      <div className={styles.stepList}>
        <article className={styles.step}><span className={styles.stepNo}>01</span><h3>Send your travel details</h3><p>Share arrival and departure dates, travellers, destinations, accommodation, suitcases, and any special requirements. You do not need every detail finalised.</p></article>
        <article className={styles.step}><span className={styles.stepNo}>02</span><h3>Receive your tailored quote</h3><p>We review your route and transportation needs, then provide a quote which clearly explains the service and relevant inclusions.</p></article>
        <article className={styles.step}><span className={styles.stepNo}>03</span><h3>Confirm and look forward to the road</h3><p>Once the itinerary, vehicle and quotation are right for you, confirm your reservation and your transport is arranged around the holiday.</p></article>
      </div>
    </section>

    <section className={`${styles.section} ${styles.faq}`}>
      <div className={styles.sectionTop}><p className={styles.sectionLabel}>Frequently asked questions</p><span className={styles.sectionCount}>06 — 06</span></div>
      <div className={styles.faqGrid}>{faqs.map(([question, answer]) => <article className={styles.faqItem} key={question}><h3>{question}</h3><p>{answer}</p></article>)}</div>
    </section>

    <section className={styles.quote} id="quote"><p>Start planning your journey</p><h2>Your Sri Lanka,<br /><em>beautifully connected.</em></h2><p className={styles.quoteText}>Tell us where you would like to go, when you are travelling, and who is coming along. We will help arrange a private driver service that feels made for you.</p><a className={styles.darkCta} href="mailto:hello@serendibroads.com?subject=Private%20Driver%20Sri%20Lanka%20Quote">Request a private driver quote <span>↗</span></a></section>
    <footer className={styles.footer}><span>© 2026 Serendib Roads</span><span>Sri Lanka · Made for wandering</span><a href="mailto:hello@serendibroads.com">hello@serendibroads.com</a></footer>
  </main>;
}
