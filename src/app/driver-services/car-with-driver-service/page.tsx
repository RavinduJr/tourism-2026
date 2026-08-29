import type { Metadata } from 'next';
import Link from 'next/link';
import styles from '../private-driver-service/private-driver-service.module.css';

export const metadata: Metadata = {
  title: 'Car With Driver in Sri Lanka | Serendib Roads',
  description: 'Hire a private air-conditioned car with a professional driver for airport pickups, day trips, and Sri Lanka round tours.',
};

const benefits = [
  ['No need to drive yourself', 'Leave unfamiliar roads, traffic patterns, parking, and directions to a professional who knows Sri Lanka, so you can enjoy the journey.'],
  ['Private, door-to-door travel', 'Travel directly from your villa, hotel or airport to your next destination without changing between buses, trains, or taxis.'],
  ['A schedule that is yours', 'Arrange each travel day around your itinerary and add appropriate stops when a longer journey calls for a break or a view.'],
  ['Your luggage stays with you', 'Keep suitcases, cabin bags, and holiday essentials in one private vehicle as you move between destinations.'],
];

const cars = [
  ['Compact car', 'A practical choice for one or two travellers with light luggage, especially for shorter private journeys.', '1–2 travellers · light luggage'],
  ['Private sedan', 'A popular balance of passenger space, luggage capacity, and long-distance comfort for couples and small families.', '2–3 travellers · standard luggage'],
  ['SUV', 'Extra room and comfort for travellers with more luggage or a preference for a more spacious journey.', '2–4 travellers · subject to luggage'],
];

const routes = [
  ['Colombo to Sigiriya', 'Travel from Colombo or the airport into the Cultural Triangle, with time for hotel stops and sightseeing.'],
  ['Sigiriya to Kandy', 'Move from ancient cities to Kandy while keeping your departure time and planned stops flexible.'],
  ['Kandy to Nuwara Eliya', 'Enjoy Sri Lanka’s hill country and mountain scenery without the stress of winding roads.'],
  ['Nuwara Eliya to Ella', 'Continue through the central highlands toward Ella and its surrounding attractions.'],
  ['Ella to Yala', 'Travel south to Tissamaharama and Yala National Park, ready for separately arranged safari activities.'],
  ['Yala to the South Coast', 'Follow your wildlife experience with beaches in Mirissa, then historic Galle, Weligama or Unawatuna.'],
];

const faqs = [
  ['Can I rent a car with a driver in Sri Lanka?', 'Yes. Arrange a private car and professional driver for airport transfers, day trips, or multi-day travel around Sri Lanka.'],
  ['How much is a car with driver?', 'Pricing depends on the vehicle, dates, route, days, distance, and your requirements. A personalised quote is the most accurate way to cost your trip.'],
  ['Is fuel included?', 'That depends on the selected package. Your quote will clearly state whether fuel and other route-related expenses are included.'],
  ['Can I hire the same car and driver for my whole holiday?', 'Yes. Multi-day bookings can be arranged so your transport continues throughout your itinerary.'],
  ['Can you pick us up at Colombo Airport?', 'Yes. Pickup from Bandaranaike International Airport can be included in your booking, then continued as a longer island journey.'],
  ['What car should two travellers choose?', 'A compact car or sedan may suit two travellers; luggage and desired comfort are the deciding factors.'],
  ['Which car suits three travellers with large suitcases?', 'A larger sedan or SUV may be needed. Tell us the number and approximate size of your bags so we can recommend the right vehicle.'],
  ['Can we change destinations during the trip?', 'Reasonable changes may be possible, but major route or distance changes can alter the price. Discuss changes before travelling where possible.'],
];

function BulletList({ items }: { items: string[] }) {
  return <ul className={styles.list}>{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}

export default function CarWithDriverPage() {
  return <main className={styles.page}>
    <nav className={styles.nav} aria-label="Primary navigation">
      <Link className={styles.brand} href="/"><span className={styles.mark}>S</span><span>Serendib<br />Roads</span></Link>
      <div className={styles.navLinks}><Link href="/driver-services">Driver services</Link><Link href="/airport-transfers">Airport transfers</Link><Link href="/vehicles">Vehicles</Link><Link href="/tours">Tours</Link></div>
      <a className={styles.navCta} href="#quote">Plan your trip <span>↗</span></a>
    </nav>

    <header className={styles.hero}>
      <div className={styles.heroCopy}>
        <p className={styles.eyebrow}>Car with driver · Sri Lanka</p>
        <h1>The road,<br /><em>made easy.</em></h1>
        <p className={styles.heroText}>Travel around Sri Lanka in a private, air-conditioned car with a professional driver dedicated to your journey—from the airport to every hotel, beach, temple, and mountain view in between.</p>
        <div className={styles.heroActions}><a className={styles.darkCta} href="#quote">Get a personal car quote <span>↗</span></a><a className={styles.plainLink} href="#choose-car">Choose your car <span>↓</span></a></div>
      </div>
      <div className={styles.heroArt} aria-hidden="true"><div className={styles.sun} /><div className={styles.mountain} /><div className={styles.road} /><span className={styles.heroCaption}>PRIVATE CAR<br />PERSONAL PACE</span></div>
    </header>

    <section className={styles.trustBar} aria-label="Car with driver highlights">
      {['Air-conditioned private cars', 'Made for couples & small families', 'Airport to island-wide travel'].map((text, index) => <div className={styles.trustItem} key={text}><span className={styles.trustNo}>0{index + 1}</span><p>{text}</p></div>)}
    </section>

    <section className={styles.section}>
      <div className={styles.sectionTop}><p className={styles.sectionLabel}>Travel, simplified</p><span className={styles.sectionCount}>01 — 06</span></div>
      <div className={styles.introGrid}><h2 className={styles.sectionTitle}>Your plans.<br />One easy ride.</h2><div className={styles.introCopy}><p>Hiring a car with driver is one of the most convenient ways for couples, solo travellers, and small families to move between Sri Lanka’s many wonderful destinations. Instead of self-driving or arranging a new taxi each time, your private car and driver are organised around your route.</p><p>Choose a suitable car for your group size, luggage, destinations, and travel preferences. Your driver can collect you from a hotel, villa, airport, or agreed location, then take you directly to the next place on your itinerary.</p></div></div>
      <div className={styles.route}><p className={styles.routeKicker}>One car, a complete island journey</p><h3 className={styles.routeTitle}>From your first airport welcome to the last coastal sunset.</h3><div className={styles.routePath}><span>Colombo Airport</span> → <span>Sigiriya</span> → <span>Kandy</span> → <span>Nuwara Eliya</span> → <span>Ella</span> → <span>Yala</span> → <span>Mirissa</span> → <span>Galle</span> → <span>Colombo</span></div></div>
    </section>

    <section className={`${styles.section} ${styles.benefits}`}>
      <div className={styles.sectionTop}><p className={styles.sectionLabel}>Why choose a car with driver?</p><span className={styles.sectionCount}>02 — 06</span></div>
      <div className={styles.benefitGrid}>{benefits.map(([title, text], index) => <article className={styles.benefit} key={title}><span className={styles.benefitNo}>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>

    <section className={`${styles.section} ${styles.destinations}`} id="choose-car">
      <div className={styles.sectionTop}><p className={styles.sectionLabel}>The right car makes all the difference</p><span className={styles.sectionCount}>03 — 06</span></div>
      <div className={styles.introGrid}><h2 className={styles.sectionTitle}>A little more room for the good stuff.</h2><div className={styles.introCopy}><p>The ideal car depends on passenger numbers, the number and size of suitcases, length of journey, destinations, desired comfort, and any special requirements. Passenger seats are only one part of the picture—boot space matters just as much.</p><p>Tell us the number of adults and children, large suitcases, cabin bags, and any additional luggage. We will help match you with the most appropriate vehicle.</p></div></div>
      <div className={styles.destinationGrid}>{cars.map(([title, text, capacity], index) => <article className={styles.destination} key={title}><span className={styles.destinationNo}>0{index + 1}</span><h3>{title}</h3><p>{text}</p><p className={styles.note}>{capacity}</p></article>)}</div>
    </section>

    <section className={styles.section}>
      <div className={styles.splitSection}><div><p className={styles.sectionLabel}>Everything considered</p><h2 className={styles.stickyTitle}>Comfort, right down to the details.</h2></div><div className={styles.detailStack}>
        <article className={styles.detail}><h3>From Colombo Airport, straight into your holiday</h3><p>Your car hire can begin as soon as you arrive at Bandaranaike International Airport. Meet your driver and continue directly to Negombo, Colombo, Sigiriya, Dambulla, Kandy, Bentota, Galle, Hikkaduwa, Mirissa, or your first hotel—then return to the airport on your departure schedule.</p></article>
        <article className={styles.detail}><h3>What your car hire package may include</h3><p>Exact inclusions are always clearly stated in your personal quotation.</p><BulletList items={['Private air-conditioned vehicle and professional driver', 'Fuel for the agreed route and driver expenses', 'Driver accommodation for multi-day tours', 'Airport pickup and agreed mileage', 'Specified parking charges and highway tolls']} /><p className={styles.note}>Review your quotation before confirming, so you know exactly what your car with driver booking includes.</p></article>
        <article className={styles.detail}><h3>A quote based on the journey you want</h3><p>Cost depends on travel days, vehicle category, total distance, pickup and final destination, passengers, luggage, itinerary, airport transfers, season, and any additional requirements. A one-day transfer and a fourteen-day island tour naturally need different plans.</p><p className={styles.note}>For the most useful quote, send travel dates, pickup location, destinations, number of travellers, and luggage details.</p></article>
        <article className={styles.detail}><h3>Made for first-time visitors, too</h3><p>When a holiday covers several locations, transport can be handled as one connected journey rather than a series of unrelated bookings. Your itinerary remains fully customisable; discuss major changes ahead of time, as extra kilometres or time can affect the original quote.</p></article>
      </div></div>
    </section>

    <section className={`${styles.section} ${styles.audiences}`}><div className={styles.audienceGrid}>
      <article className={styles.audience}><h3>For couples</h3><p>Choose your hotels, attractions, restaurants and daily schedule while every journey in between is already organised. A private car adds welcome privacy to a honeymoon or independent escape.</p></article>
      <article className={styles.audience}><h3>For small families</h3><p>Keep the day simple between hotels. Tell us about child seats, baby equipment, pushchairs, and larger bags so we can recommend enough space from the start.</p></article>
      <article className={styles.audience}><h3>For solo travellers</h3><p>Convenient door-to-door transportation makes it easier to see several destinations on a limited holiday without arranging individual transfers each day.</p></article>
    </div></section>

    <section className={`${styles.section} ${styles.destinations}`}>
      <div className={styles.sectionTop}><p className={styles.sectionLabel}>Popular roads, beautifully connected</p><span className={styles.sectionCount}>04 — 06</span></div>
      <div className={styles.destinationGrid}>{routes.map(([title, text], index) => <article className={styles.destination} key={title}><span className={styles.destinationNo}>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>

    <section className={`${styles.section} ${styles.comparison}`}>
      <div className={styles.sectionTop}><p className={styles.sectionLabel}>Find your ideal way to travel</p><span className={styles.sectionCount}>05 — 06</span></div>
      <div className={styles.compareGrid}>
        <article className={styles.compareCard}><h3>Car with driver vs. self-drive</h3><p>A self-drive rental may suit travellers who enjoy independent driving and are comfortable with the licence requirements, roads, and parking. A chauffeur-driven car lets you focus on the holiday.</p><BulletList items={['Self-drive: independent driving and full vehicle control', 'Car with driver: door-to-door travel, local road knowledge, less parking and navigation to consider']} /></article>
        <article className={styles.compareCard}><h3>Car with driver vs. taxi</h3><p>A taxi is ideal for an individual short trip. A car with driver is a more cohesive choice for hotel-to-hotel touring and multi-day travel across Sri Lanka.</p><BulletList items={['Taxi: short journeys, city transport, occasional one-way transfers', 'Car with driver: full days, several destinations, luggage, personalised itineraries']} /></article>
        <article className={styles.compareCard}><h3>Car with driver vs. private driver</h3><p>Both services work well for multi-day travel. This service focuses on choosing the right private vehicle and transport package for your route.</p><Link className={styles.plainLink} href="/driver-services/private-driver-service">Explore private driver service <span>→</span></Link></article>
        <article className={styles.compareCard}><h3>Car with driver vs. van</h3><p>Cars generally suit solo travellers, couples, two or three adults, small families, and moderate luggage. Vans offer more capacity for larger families, groups, four or more adults, or substantial luggage.</p><Link className={styles.plainLink} href="/driver-services/van-driver-service">Explore van with driver <span>→</span></Link></article>
      </div>
    </section>

    <section className={`${styles.section} ${styles.steps}`}>
      <div className={styles.sectionTop}><p className={styles.sectionLabel}>How to book your car</p><span className={styles.sectionCount}>06 — 06</span></div>
      <div className={styles.stepList}>
        <article className={styles.step}><span className={styles.stepNo}>01</span><h3>Tell us about the trip</h3><p>Send travel dates, passengers, pickup and drop-off locations, destinations, suitcases, vehicle preferences, and any child-seat or special requirements. A rough itinerary is enough to begin.</p></article>
        <article className={styles.step}><span className={styles.stepNo}>02</span><h3>Choose the right car</h3><p>Based on your passengers, luggage, route, and comfort requirements, we can suggest the vehicle that fits your journey.</p></article>
        <article className={styles.step}><span className={styles.stepNo}>03</span><h3>Receive your quote and confirm</h3><p>Review pricing, inclusions, vehicle, itinerary, and terms. Once it feels right, confirm the booking and your car and driver can be arranged around your dates.</p></article>
      </div>
    </section>

    <section className={`${styles.section} ${styles.faq}`}>
      <div className={styles.sectionTop}><p className={styles.sectionLabel}>Frequently asked questions</p><span className={styles.sectionCount}>Helpful details</span></div>
      <div className={styles.faqGrid}>{faqs.map(([question, answer]) => <article className={styles.faqItem} key={question}><h3>{question}</h3><p>{answer}</p></article>)}</div>
    </section>

    <section className={styles.quote} id="quote"><p>Start planning your journey</p><h2>A car that takes you<br /><em>further, effortlessly.</em></h2><p className={styles.quoteText}>Share your Sri Lanka itinerary, travel dates, passengers, and luggage requirements. We will help find the private car and driver that suit the road ahead.</p><a className={styles.darkCta} href="mailto:hello@serendibroads.com?subject=Car%20With%20Driver%20Sri%20Lanka%20Quote">Request a car with driver quote <span>↗</span></a></section>
    <footer className={styles.footer}><span>© 2026 Serendib Roads</span><span>Sri Lanka · Made for wandering</span><a href="mailto:hello@serendibroads.com">hello@serendibroads.com</a></footer>
  </main>;
}
