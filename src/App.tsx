import {Navbar} from './components';
import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffers,
  Subscribe,
  SuperQuality,
} from './sections';

export default function App() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <PopularProducts />
      <SuperQuality />
      <Services />
      <SpecialOffers />
      <CustomerReviews />
      <Subscribe />
      <Footer />
    </main>
  );
}
