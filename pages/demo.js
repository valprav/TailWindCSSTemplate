import Head from 'next/head';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeatureGrid from '../components/FeatureGrid';
import Testimonials from '../components/Testimonials';
import PricingTable from '../components/PricingTable';
import FAQAccordion from '../components/FAQAccordion';
import Footer from '../components/Footer';

export default function Demo() {
  return (
    <div>
      <Head>
        <title>Component Demo</title>
      </Head>
      <Navbar />
      <main className="space-y-20">
        <HeroSection />
        <FeatureGrid />
        <Testimonials />
        <PricingTable />
        <FAQAccordion />
      </main>
      <Footer />
    </div>
  );
}
