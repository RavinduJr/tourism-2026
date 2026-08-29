import type { Metadata } from 'next';
import Link from 'next/link';
import styles from '../private-driver-service/private-driver-service.module.css';

export const metadata: Metadata = { title: 'Van With Driver in Sri Lanka | Serendib Roads', description: 'Hire a private air-conditioned van with a professional driver for family holidays, group tours, airport pickups, and Sri Lanka round trips.' };

const benefits = [
  ['More room for everyone', 'A private van gives families and groups additional seating space, making longer drives between Sri Lanka’s many destinations more comfortable.'],
  ['Space for every bag', 'Large suitcases, cabin bags, pushchairs, baby equipment, backpacks, and holiday essentials have more room than in a standard car.'],
  ['Keep the group together', 'Travel in one vehicle instead of coordinating several taxis. Hotel check-ins, airport departures, meal stops, and sightseeing become far simpler.'],
  ['A flexible schedule', 'Plan the journey around your group—not a public transport timetable—with rest and meal breaks when children or older family members need them.'],
];

const vans = [
  ['Standard passenger van', 'A comfortable option for smaller families and groups who need more room than a normal car.', 'More room for passengers and luggage'],
  ['Large passenger van', 'Designed for larger groups travelling with a generous amount of luggage.', 'Ideal for group journeys'],
  ['Premium van', 'Additional comfort for longer private journeys across the island.', 'Relaxed long-distance travel'],
  ['Minibus', 'A strong option when a standard van cannot meet the group’s passenger capacity needs.', 'For larger parties'],
];

const routes = [
  ['Airport to Sigiriya', 'Arrive together, luggage included, then travel on to Sigiriya, Dambulla, and the Cultural Triangle.'],
  ['Sigiriya to Kandy', 'Keep the group and luggage together on the journey from ancient cities towards Kandy.'],
  ['Kandy to Nuwara Eliya', 'Enjoy winding hill-country roads in the comfort of a spacious private vehicle.'],
  ['Nuwara Eliya to Ella', 'Continue through tea country with plenty of room for the whole party.'],
  ['Ella to Yala', 'Head south toward Tissamaharama and Yala National Park for wildlife experiences.'],
  ['Yala to the South Coast', 'Continue to Mirissa, Galle, Unawatuna, Weligama, and the beach places your group has chosen.'],
];

const faqs = [
  ['Can I hire a van with a driver in Sri Lanka?', 'Yes. Private vans can be arranged for airport transfers, day trips, family holidays, group travel, and multi-day Sri Lanka tours.'],
  ['How much does a van with driver cost?', 'The cost depends on van size, travel days, route, distance, luggage, and any additional requirements. A personal quote is the most accurate guide.'],
  ['How many passengers can travel in a van?', 'It depends on the vehicle. Passenger and luggage capacity should always be considered together before choosing your van.'],
  ['Can the van carry large suitcases?', 'Yes, subject to the chosen van and number of travellers. Let us know exactly how many large and small bags are coming with you.'],
  ['Can you collect our group from Colombo Airport?', 'Yes. Pickup from Bandaranaike International Airport can be arranged for families and groups, then continued as part of your wider journey.'],
  ['Is a van suitable for families with children?', 'Yes. The additional passenger and luggage space can be especially helpful for families. Request child seats in advance if you need them.'],
  ['Can we bring surfboards or large equipment?', 'Depending on the van and storage arrangement, oversized items can often be accommodated. Please tell us before booking.'],
  ['Does the driver speak English?', 'English-speaking drivers can be arranged for international visitors. Let us know if your group has particular language needs.'],
];

function BulletList({ items }: { items: string[] }) { return <ul className={styles.list}>{items.map((item) => <li key={item}>{item}</li>)}</ul>; }

export default function VanWithDriverPage() {
  return <main className={styles.page}>
    <nav className={styles.nav} aria-label="Primary navigation"><Link className={styles.brand} href="/"><span className={styles.mark}>S</span><span>Serendib<br />Roads</span></Link><div className={styles.navLinks}><Link href="/driver-services">Driver services</Link><Link href="/airport-transfers">Airport transfers</Link><Link href="/vehicles">Vehicles</Link><Link href="/tours">Tours</Link></div><a className={styles.navCta} href="#quote">Plan your trip <span>↗</span></a></nav>

    <header className={styles.hero}><div className={styles.heroCopy}><p className={styles.eyebrow}>Van with driver · Sri Lanka</p><h1>Together,<br /><em>all the way.</em></h1><p className={styles.heroText}>Travel Sri Lanka in a private van with a professional driver—room for your family, your friends, every suitcase, and a holiday that moves at your pace.</p><div className={styles.heroActions}><a className={styles.darkCta} href="#quote">Get a personal van quote <span>↗</span></a><a className={styles.plainLink} href="#choose-van">Choose your van <span>↓</span></a></div></div><div className={styles.heroArt} aria-hidden="true"><div className={styles.sun} /><div className={styles.mountain} /><div className={styles.road} /><span className={styles.heroCaption}>MORE ROOM<br />FOR THE JOURNEY</span></div></header>

    <section className={styles.trustBar} aria-label="Van with driver highlights">{['Private vans for groups', 'Room for luggage & equipment', 'Airport to island-wide travel'].map((text, index) => <div className={styles.trustItem} key={text}><span className={styles.trustNo}>0{index + 1}</span><p>{text}</p></div>)}</section>

    <section className={styles.section}><div className={styles.sectionTop}><p className={styles.sectionLabel}>Travel made together</p><span className={styles.sectionCount}>01 — 06</span></div><div className={styles.introGrid}><h2 className={styles.sectionTitle}>One van.<br />Everybody in.</h2><div className={styles.introCopy}><p>Hiring a van with driver is one of the most practical ways for families and groups to explore Sri Lanka. Instead of splitting passengers between cars or arranging several taxis, everyone travels together in one private vehicle.</p><p>From airports and hotels to beaches, hill country, cultural sites, wildlife parks, weddings, business trips, and long-distance holidays, your driver and van can be arranged around your own itinerary.</p></div></div><div className={styles.route}><p className={styles.routeKicker}>A complete island journey, connected</p><h3 className={styles.routeTitle}>All the places on your list. All the people you love.</h3><div className={styles.routePath}><span>Airport</span> → <span>Sigiriya</span> → <span>Kandy</span> → <span>Nuwara Eliya</span> → <span>Ella</span> → <span>Yala</span> → <span>Mirissa</span> → <span>Galle</span> → <span>Colombo</span></div></div></section>

    <section className={`${styles.section} ${styles.benefits}`}><div className={styles.sectionTop}><p className={styles.sectionLabel}>Why choose a private van?</p><span className={styles.sectionCount}>02 — 06</span></div><div className={styles.benefitGrid}>{benefits.map(([title, text], index) => <article className={styles.benefit} key={title}><span className={styles.benefitNo}>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>

    <section className={`${styles.section} ${styles.destinations}`} id="choose-van"><div className={styles.sectionTop}><p className={styles.sectionLabel}>Find space that fits the trip</p><span className={styles.sectionCount}>03 — 06</span></div><div className={styles.introGrid}><h2 className={styles.sectionTitle}>Choose room<br />to breathe.</h2><div className={styles.introCopy}><p>Passenger capacity should always be considered with luggage. A van may have enough seats for a group but not enough storage if every traveller brings a large suitcase.</p><p>Tell us the number of adults and children, large suitcases, cabin bags, pushchairs, baby equipment, surfboards, sports equipment, mobility items, and any unusual luggage. We can recommend a van that works in real life, not just on paper.</p></div></div><div className={styles.destinationGrid}>{vans.map(([title, text, capacity], index) => <article className={styles.destination} key={title}><span className={styles.destinationNo}>0{index + 1}</span><h3>{title}</h3><p>{text}</p><p className={styles.note}>{capacity}</p></article>)}</div></section>

    <section className={styles.section}><div className={styles.splitSection}><div><p className={styles.sectionLabel}>The details, taken care of</p><h2 className={styles.stickyTitle}>Built for real-world group travel.</h2></div><div className={styles.detailStack}>
      <article className={styles.detail}><h3>From Colombo Airport, together from the start</h3><p>Airport pickup at Bandaranaike International Airport is especially easy for families and groups: everyone and every bag leaves together, then continues directly to Negombo, Colombo, Sigiriya, Dambulla, Kandy, Bentota, Hikkaduwa, Galle, Mirissa, or the first hotel.</p></article>
      <article className={styles.detail}><h3>For families, friends, and special journeys</h3><p>Private vans suit family holidays, group tours, wedding guests, business teams, university groups, sports groups, photography trips, beach holidays, wildlife tours, and adventure travel with additional gear.</p><BulletList items={['Rest and meal breaks designed around your group', 'Child seats and family requirements arranged in advance', 'Oversized luggage, surfboards, diving or photography gear considered', 'Hotel transfers and event pickup schedules coordinated']} /></article>
      <article className={styles.detail}><h3>What your van hire may include</h3><p>Your personal quotation will clearly list the agreed service and inclusions.</p><BulletList items={['Private air-conditioned van and professional driver', 'Fuel for the agreed itinerary and driver expenses', 'Driver accommodation during multi-day tours', 'Airport pickup and agreed mileage', 'Specified parking and highway tolls']} /><p className={styles.note}>Confirm the complete quotation before booking so everyone knows what the group transport covers.</p></article>
      <article className={styles.detail}><h3>A price shaped around your group</h3><p>Cost depends on passenger numbers, van size, travel days, route, distance, luggage, season, airport transfers, and extra equipment or requirements. A short transfer and a two-week group tour naturally need different plans.</p><p className={styles.note}>For a precise quote, send travel dates, passengers, luggage, destinations, and pickup and drop-off locations.</p></article>
    </div></div></section>

    <section className={`${styles.section} ${styles.audiences}`}><div className={styles.audienceGrid}><article className={styles.audience}><h3>Family holidays</h3><p>Plan rest stops, meal breaks, child seats, luggage, and hotel changes around the needs of your family—without rebooking transport every time you move.</p></article><article className={styles.audience}><h3>Groups of friends</h3><p>Visit Sigiriya, Kandy, Ella, Yala, Mirissa, Galle, beaches, parks, and cultural sites without splitting the group between multiple vehicles.</p></article><article className={styles.audience}><h3>Weddings & events</h3><p>Coordinate guest transfers, airport collections, hotel pickups, and event travel. Share passenger numbers, locations, and timings for the right arrangement.</p></article></div></section>

    <section className={`${styles.section} ${styles.destinations}`}><div className={styles.sectionTop}><p className={styles.sectionLabel}>Popular group journeys</p><span className={styles.sectionCount}>04 — 06</span></div><div className={styles.destinationGrid}>{routes.map(([title, text], index) => <article className={styles.destination} key={title}><span className={styles.destinationNo}>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>

    <section className={`${styles.section} ${styles.comparison}`}><div className={styles.sectionTop}><p className={styles.sectionLabel}>The right way for your group to move</p><span className={styles.sectionCount}>05 — 06</span></div><div className={styles.compareGrid}>
      <article className={styles.compareCard}><h3>Van with driver vs. car</h3><p>The difference is space. Cars usually suit solo travellers, couples, small families and moderate luggage. Vans work well for families, groups, four or more travellers, and extra bags or equipment.</p><Link className={styles.plainLink} href="/driver-services/car-with-driver-service">Explore car with driver <span>→</span></Link></article>
      <article className={styles.compareCard}><h3>Van with driver vs. multiple taxis</h3><p>Several taxis can work for a short journey, but coordinating them through a multi-city holiday can quickly become inconvenient.</p><BulletList items={['Multiple taxis: separate vehicles, divided luggage, repeat bookings', 'One van: the group stays together with one coordinated plan']} /></article>
      <article className={styles.compareCard}><h3>Van with driver vs. public transport</h3><p>Public transport can be memorable for light, independent travellers with flexible schedules. A private van brings door-to-door travel, capacity, and flexibility for groups.</p><BulletList items={['Public transport: lower-cost, flexible, travel-light journeys', 'Private van: family convenience, luggage, children, multiple destinations, comfort']} /></article>
      <article className={styles.compareCard}><h3>Your route is still yours</h3><p>You do not need a fixed group-tour itinerary just because you are travelling in a van. Build your own route, and discuss any significant changes early as they can affect distance and price.</p><Link className={styles.plainLink} href="/driver-services/private-driver-service">Explore private driver service <span>→</span></Link></article>
    </div></section>

    <section className={`${styles.section} ${styles.steps}`}><div className={styles.sectionTop}><p className={styles.sectionLabel}>How to book your van</p><span className={styles.sectionCount}>06 — 06</span></div><div className={styles.stepList}><article className={styles.step}><span className={styles.stepNo}>01</span><h3>Tell us about your group</h3><p>Share dates, adults and children, suitcases, pickup and drop-off locations, destinations, oversized luggage, child-seat needs, and any other transport requirements.</p></article><article className={styles.step}><span className={styles.stepNo}>02</span><h3>Choose the appropriate van</h3><p>We can suggest a vehicle based on the number of people, luggage, route, and level of comfort your group needs.</p></article><article className={styles.step}><span className={styles.stepNo}>03</span><h3>Receive a quote and confirm</h3><p>Your quote is based on the vehicle, travel duration, route, and agreed inclusions. Once you are happy, your group transport can be arranged.</p></article></div></section>

    <section className={`${styles.section} ${styles.faq}`}><div className={styles.sectionTop}><p className={styles.sectionLabel}>Frequently asked questions</p><span className={styles.sectionCount}>Helpful details</span></div><div className={styles.faqGrid}>{faqs.map(([question, answer]) => <article className={styles.faqItem} key={question}><h3>{question}</h3><p>{answer}</p></article>)}</div></section>

    <section className={styles.quote} id="quote"><p>Start planning together</p><h2>More of Sri Lanka,<br /><em>shared beautifully.</em></h2><p className={styles.quoteText}>Tell us your itinerary, dates, group size, and luggage details. We will help match your journey with a van and driver that has room for it all.</p><a className={styles.darkCta} href="mailto:hello@serendibroads.com?subject=Van%20With%20Driver%20Sri%20Lanka%20Quote">Request a van with driver quote <span>↗</span></a></section>
    <footer className={styles.footer}><span>© 2026 Serendib Roads</span><span>Sri Lanka · Made for wandering</span><a href="mailto:hello@serendibroads.com">hello@serendibroads.com</a></footer>
  </main>;
}
