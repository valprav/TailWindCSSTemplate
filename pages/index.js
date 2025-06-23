import Head from 'next/head';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeatureGrid from '../components/FeatureGrid';
import Testimonials from '../components/Testimonials';
import PricingTable from '../components/PricingTable';
import FAQAccordion from '../components/FAQAccordion';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>StoryHero</title>
        <meta name="description" content="Create personalized stories for kids" />
      </Head>
      <Navbar />
      <main>
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
