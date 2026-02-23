import Header from '@/components/Header';
import Hero from '@/components/Hero';
import VideoPlayer from '@/components/VideoPlayer';
import InlineCTA from '@/components/InlineCTA';
import DownloadSection from '@/components/DownloadSection';
import NewsletterForm from '@/components/NewsletterForm';
import ContactForm from '@/components/ContactForm';
import StickyMobileCTA from '@/components/StickyMobileCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <VideoPlayer />
      <InlineCTA />
      <DownloadSection />
      <NewsletterForm />
      <ContactForm />
      <StickyMobileCTA />
      <Footer />
    </main>
  );
}
