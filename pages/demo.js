import Head from 'next/head';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import StoryGenerator from '../components/StoryGenerator';
import FeatureGrid from '../components/FeatureGrid';
import Testimonials from '../components/Testimonials';
import PricingTable from '../components/PricingTable';
import FAQAccordion from '../components/FAQAccordion';
import UserProfile from '../components/UserProfile';
import StoryList from '../components/StoryList';
import StoryPreview from '../components/StoryPreview';
import Footer from '../components/Footer';

export default function Demo() {
  const [theme, setTheme] = useState('theme-sky');

  return (
    <div className={theme}>
      <Head>
        <title>Component Demo</title>
      </Head>
      <div className="p-4 text-right">
        <label htmlFor="palette" className="mr-2 font-medium">
          Palette:
        </label>
        <select
          id="palette"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          className="border px-2 py-1 rounded"
        >
          <option value="theme-sky">Sky</option>
          <option value="theme-forest">Forest</option>
          <option value="theme-sunset">Sunset</option>
          <option value="theme-berry">Berry</option>
          <option value="theme-ocean">Ocean</option>
          <option value="theme-candy">Candy</option>
          <option value="theme-lemonade">Lemonade</option>
        </select>
      </div>
      <Navbar />
      <main className="space-y-20">
        <HeroSection />
        <StoryGenerator />
        <FeatureGrid />
        <Testimonials />
        <PricingTable />
        <FAQAccordion />
        <UserProfile />
        <StoryList />
        <StoryPreview />
      </main>
      <Footer />
    </div>
  );
}
